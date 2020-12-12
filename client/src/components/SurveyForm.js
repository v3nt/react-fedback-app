import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

// reduxForm -s same as connect and used to connect to redux store.

import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Title", name: "surveyTitle" },
  { label: "Subject", name: "surveySubject" },
  { label: "Body", name: "surveyBody" },
  { label: "Recipients", name: "surveyRecipients" },
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
          <Link to="/surveys" className="red btn">
            Cancel <i className="material-icons right">clear</i>
          </Link>

          <button type="submit" value="Submit" className="btn right">
            Review <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
