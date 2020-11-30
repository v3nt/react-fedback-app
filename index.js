// common js module used for this project
const express = require("express");
// ES2015 modules :
// import express from 'express' //
//
// const authRoutes = require("./routes/authRoutes"); // not needed as using require(...)(app) directly below.
const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); // required but ref never used as nothing returned

mongoose = require("mongoose");
mongoose.connect(keys.mongoURI);

const app = express();
// authRoutes(app);
// or
require("./routes/authRoutes")(app); // app ius passed into arrow function in aR.js

//
const PORT = process.env.PORT || 5000;
app.listen(PORT);
