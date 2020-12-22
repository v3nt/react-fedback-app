import React from "react";
import { reduxForm, Field } from "redux-form"; // reduxForm -ssame as connect and used to connect to redux store.
import { Link } from "react-router-dom";

import validateEmails from "../utils/validateEmails";

import SurveyField from "./SurveyField";

import formFields from "./formFields";

const renderField = () => {
  return formFields.map((el) => {
    return <Field key={el.name} {...el} component={SurveyField} type="text" />;
  });
};

const SurveyForm = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <h3 className="header">Form 2</h3>
      <form onSubmit={handleSubmit(props.onSurveySubmit)}>
        {renderField()}

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
          <i className="material-icons right">forward</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "you must provide a title";
  }
  if (!values.subject) {
    errors.subject = "you must provide a subject";
  }
  errors.recipients = validateEmails(values.recipients || "");

  formFields.map(({ name }) => {
    if (!values[name]) {
      errors[name] = `Value needed for ${name}`;
    }
    return errors;
  });

  return errors;
};

// wrap the form
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
