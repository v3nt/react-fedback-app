import React from "react";

const SurveyField = ({ input, label, meta: { touched, error, warning } }) => {
  return (
    <div className="input-fieldOFF">
      <label>{label}</label>
      <input {...input} />

      <div className="red-text" style={{ marginBottom: "0px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
