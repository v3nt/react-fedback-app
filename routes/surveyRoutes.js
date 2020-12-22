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
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("thanks for voting");
  });
  //
  app.post("/api/surveys/webhooks", (req, res) => {
    // console.log(req.body);
    const events = _.map(req.body, ({ email, url }) => {
      const pathname = new URL(url).pathname;
      const p = new Path("/api/surveys/:surveyId/:choice");
      console.log(p.test(pathname));
      const match = p.test(pathname); // can't deconstruct this as may return null.
      if (match) {
        return { email: email, surveyId: match.surveyId, choice: match.choice };
      }
    });
    console.log(events);

    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");

    console.log(uniqueEvents);

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
