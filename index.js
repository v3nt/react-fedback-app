// common js module used for this project
const express = require("express");
require("./services/passport.js"); // required but ref never used as nothing returned
// ES2015 modules :
// import express from 'express' //
//
// const authRoutes = require("./routes/authRoutes");
mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);

const app = express();

// authRoutes(app);
// or
require("./routes/authRoutes")(app); // app ius passed into arrow function in aR.js

const PORT = process.env.PORT || 5000;

app.listen(PORT);
