import React, { Component } from "react";

import SurveyForm from "./SurveyForm";

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h2 className="header">New survey</h2>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
