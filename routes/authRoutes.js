const passport = require("passport");

// route handler, ie localhost:5000/auth/google

module.exports = (app) => {
  // app object is defined in index.js, pre ES5
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  // 2nd route handler
  app.get("/auth/google/callback", passport.authenticate("google"));
};
