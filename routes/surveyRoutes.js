const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("thanks for voting");
  });
  //
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    // initial code.

    // const events = _.map(req.body, ({ email, url }) => {
    //   const match = p.test(new URL(url).pathname); // can't deconstruct this as may return null.
    //   if (match) {
    //     return { email: email, surveyId: match.surveyId, choice: match.choice };
    //   }
    // });

    // const compactEvents = _.compact(events);
    // const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");

    // Refactor with the _.chain function from lodash
    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname); // can't deconstruct this as may return null.
        if (match) {
          return {
            email: email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        // this is async but we don't need to respond to so no await needed. `Survey` is fromt he mongoose model
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
        // exec() needed!
      })
      .value();

    res.send({});
  });
  //
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title, // title:title
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })), // es6 refactored
      _user: req.user.id, // id is from mongoose model.
      dateSent: Date.now(),
    });

    // send the Mail with survey Obj.
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send(); // pauses until returns
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err); // 422 = something wrong with the data.
    }
  });
};
