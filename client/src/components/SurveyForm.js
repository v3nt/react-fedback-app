import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

// reduxForm -s same as connect and used to connect to redux store.

import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Title", name: "surveyTitle", noValueError: "Title require" },
  { label: "Subject", name: "surveySubject" },
  { label: "Body", name: "surveyBody" },
  { label: "Recipients", name: "surveyRecipients", value: "dan@jynk.net" },
];

class SurveyForm extends Component {
  renderField() {
    return FIELDS.map((el) => {
      return (
        <Field key={el.name} {...el} component={SurveyField} type="text" />
      );
    });
  }
  render() {
    return (
      <div>
        <h3 className="header">Form 2</h3>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderField()}

          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <Link to="/surveys" className="red btn">
            Cancel <i className="material-icons right">clear</i>
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  console.log("validate", values);
  // if (values.title) {
  //   errors.title = "you must provide a title";
  // }

  FIELDS.map((name, label, noValueError) => {
    if (!values[name]) {
      errors[name] = noValueError ? noValueError : `Value needed for ${label}`;
    }
  });
  return errors;
}

// wrap the form
export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
