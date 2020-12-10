const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title, // title:title
      subject,
      body,
      recipients: recipients.split(",").map((email) => {
        email.trim();
      }), // es6 refactored
      _user: req.user.id, // id is from mongoose model.
      dateSent: Date.now(),
    });

    // send the Mail with survey Obj.
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send(); // how to test before doing all the react stuff. REST client.
  });

  //   full js line recipients: recipients.split(",").map((email) => {return { email: email };
};
