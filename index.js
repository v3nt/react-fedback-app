// common js module used for this project
const express = require("express");
// ES2015+ modules :
// import express from 'express' //
//

const cookieSession = require("cookie-session");
const passport = require("passport");

//express does not parse the result so use `npm i body-parser`
const bodyParser = require("body-parser");

const keys = require("./config/keys");

// models
require("./models/User");
require("./models/Survey");

require("./services/passport"); // required but ref never used as nothing returned

mongoose = require("mongoose");
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

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

require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//heroku
if (process.env.NODE_ENV === "production") {
  // express serves up prod files like main.js or main.css files with base of:
  app.use(express.static("client/build"));

  // express serves index.html if it doesn't know what else to do
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//
const PORT = process.env.PORT || 5000;
// console.log(PORT);
app.listen(PORT);
