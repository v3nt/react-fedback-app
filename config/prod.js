// https://console.developers.google.com/apis/credentials/oauthclient/162192078766-7p8akmg8f4b05pjdpatdqg5uo8t3itoh.apps.googleusercontent.com?project=emaily-prod-297319
const { use } = require("passport");
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};
