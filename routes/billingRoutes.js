const keys = require("../config/keys");

const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

//express does not parse the result `npm i body-parser`

module.exports = (app) => {
  console.log("/api/stripe");
  // requireLogin (middleware, add as many as needed) only invoked when post request to this route is made.
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // console.log(req.body);

    // long hand pre middleware
    // if (!req.user) {
    //   console.log("no user!");
    //   return res.status(401).send({ error: "You must log in!" });
    // }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    // console.log(charge);
    // add credits via user model User.js req.user
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
