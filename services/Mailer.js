// es6 / 2015
// Files with caps `export` something. ie passport.js doesn't.

const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {


    this.from_email = new helper.Email('dan@jynk.net');

}

module.exports = Mailer;
