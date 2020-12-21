//
import React, { Component } from "react";
import { connect } from "react-redux";

import fromFields from "./formFields";

const SurveyForm = ({ onCancel, formValues }) => {
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
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Cancel
      </button>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Confirm & send
      </button>
    </div>
  );
};

function mapsStateToProps(state) {
  // console.log(state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapsStateToProps)(SurveyForm);
