import React, { Component } from "react";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

import { reduxForm } from "redux-form";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return (
      <div>
        <h2 className="header">New survey</h2>
        {this.renderContent()}
      </div>
    );
  }
}

// setting 'form' here destorys pre set entries. destroyOnUnmount:false
export default reduxForm({ form: "surveyForm" })(SurveyNew);
