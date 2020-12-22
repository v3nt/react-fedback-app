//
import React, { Component } from "react";
import { connect } from "react-redux";

import fromFields from "./formFields";

import * as actions from "../actions/";

const SurveyForm = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = fromFields.map(({ name, label }) => {
    return (
      <li key={name}>
        {label} {formValues[name]}
      </li>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries...</h5>
      <div>
        <ul>{reviewFields}</ul>
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        className="green btn-flat white-text right"
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapsStateToProps(state) {
  // console.log(state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapsStateToProps, actions)(SurveyForm);
