// dev.js, don't commit.
const { use } = require("passport");
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};

// googleClientID:
// "162192078766-7p8akmg8f4b05pjdpatdqg5uo8t3itoh.apps.googleusercontent.com",
// googleClientSecret: "zQ_HjZINER5NPpP0JcwHlfNo",
// mongoURI:
// "mongodb+srv://emailyprodjynkusers:MAXWXNq9Ey1IsAEa@cluster0.mzjpg.mongodb.net/emaily-prod?retryWrites=true&w=majority",
// cookieKey: "DlStHiqEynT123redacted",
