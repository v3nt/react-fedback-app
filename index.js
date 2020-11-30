// common js module used for this project
const express = require("express");
// ES2015 modules :
// import express from 'express' //

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();
// sometimes you use several express apps in a project.

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

// route handler, ie localhost:5000/auth/google
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// 2nd route handler
app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
//
app.listen(PORT);
