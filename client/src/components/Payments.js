import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  // token is for callback.
  //   https://www.npmjs.com/package/react-stripe-checkout
  // debugger;
  render() {
    return (
      <StripeCheckout
        name="Three Comma Co." // the pop-in header title
        description="5 for 5 credits. "
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add 5 credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
