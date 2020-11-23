// common js module used for this project
const express = require("express");

// ES2015 modules.
// import express from 'express' //

const app = express();
// sometimes you use several express apps in a project.

app.get("/", (req, res) => {
  res.send({ hi: "there - we changed something", bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
