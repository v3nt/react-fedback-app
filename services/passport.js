const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
// passport is a service to our app.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // when user successfully logs in we run this callback
      // creates `async` action so needs a promise
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser); // null = no error here, user record.
        } else {
          //  // This creates a record of a new user model instance. A single record inside the collection. lso async so needs another promise.
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });

      //
      // console.log("accessToken", accessToken);
      // console.log("refreshToken", refreshToken);
      // console.log("profile", profile);
    }
  )
);
