import React, { Component } from "react";

import SurveyForm from "./SurveyForm";

class SurveyNew extends Component {
  render() {
    return (
      <div>
        New survey
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;