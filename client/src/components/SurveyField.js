import React from "react";

const SurveyField = ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div className="input-fieldOFF">
      <label>{label}</label>
      <input {...input} />

      {meta.touched && meta.error ? meta.error : null}
    </div>
  );
};

export default SurveyField;
