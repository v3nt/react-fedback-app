// common js module used for this project
const express = require("express");
// ES2015+ modules :
// import express from 'express' //
//

const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); // required but ref never used as nothing returned

mongoose = require("mongoose");
mongoose.connect(keys.mongoURI);

const app = express();

// tell express to use cookies in our app, D * H * M * S * MS
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// authRoutes(app);
require("./routes/authRoutes")(app);
// app is passed into arrow function in aR.js, // const authRoutes = require("./routes/authRoutes");
// not needed as using require(...)(app).

//
const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT);
//
