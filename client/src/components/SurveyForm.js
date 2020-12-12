import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

// reduxForm -s same as connect and used to connect to redux store.

import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderField() {
    return (
      <div>
        <Field
          label="title"
          name="surveyTitle"
          component={SurveyField}
          type="text"
        />
        <Field
          label="Subject"
          name="surveySubject"
          component={SurveyField}
          type="text"
        />
        <Field
          label="Body"
          name="surveyBody"
          component={SurveyField}
          type="text"
        />
        <Field
          label="Recipients"
          name="surveyRecipients"
          component={SurveyField}
          type="text"
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <h3 className="header">Form 2</h3>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderField()}
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
