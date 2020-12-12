import React from "react";

const SurveyField = ({ input, label }) => {
  //   console.log(input);
  return (
    <div className="input-field">
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
