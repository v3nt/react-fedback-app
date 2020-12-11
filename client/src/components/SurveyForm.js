import React, { Component } from "react";
import { reduxForm } from "redux-form";

// reduxForm -s same as connect and used to connect to redux store.

class SurveyForm extends Component {
  render() {
    return <div>Form 2</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
