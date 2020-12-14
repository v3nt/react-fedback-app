import React from "react";

const SurveyField = ({ input, label, meta: { touched, error, warning } }) => {
  console.log(touched, error, warning);
  return (
    <div className="input-fieldOFF">
      <label>{label}</label>
      <input {...input} />

      {touched && error ? error : null}
    </div>
  );
};

export default SurveyField;
