// es6 / 2015
// Files with caps `export` something. ie passport.js doesn't.

const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");
const recipientSchema = require("../models/Recipient");

class Mailer extends helper.Mail {
  // cons always called first by default
  constructor({ subject, recipients }, content) {
    super(); // es2015 classes
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("dan@jynk.net");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); // addContent from Mailer (base) class
    this.addClickTracking(); // ours
    this.addRecipients(recipients); // ours
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }
  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });

    const response = await this.sgApi.API(request);
    return response;
  }
  //   render() {
  //     return "";
  //   }
}

module.exports = Mailer;
