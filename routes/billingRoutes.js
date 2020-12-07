const keys = require("../config/keys");

const stripe = require("stripe")(keys.stripeSecretKey);

//express does not parse the result `npm i body-parser`

module.exports = (app) => {
  app.post("/api/stripe", (req, res) => {
    console.log(req.body);
  });
};
