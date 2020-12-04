const passport = require("passport");
// passport is a service to our app.

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); // _id from mongoDB record or document. This is the token for the cookie
});

passport.deserializeUser((id, done) => {
  // tghis is an async request that will need a promise
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      // new version
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);

      //   old version. User.findOne({ googleId: profile.id }).then((existingUser) => {
      //   if (existingUser) {
      //     done(null, existingUser); // null = no error here, user record.
      //   } else {
      //     //  // This creates a record of a new user model instance. A single record inside the collection. lso async so needs another promise.
      //      new User({ googleId: profile.id })
      //       .save()
      //       .then((user) => done(null, user));
      //   }
      // });

      // console.log("accessToken", accessToken);
      // console.log("refreshToken", refreshToken);
      // console.log("profile", profile);
    }
  )
);
