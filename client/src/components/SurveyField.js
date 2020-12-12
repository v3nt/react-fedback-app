import React from "react";

const SurveyField = ({ input, label, meta }) => {
  // console.log(error);
  return (
    <div className="input-fieldOFF">
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
