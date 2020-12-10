// return html for Mailer
const keys = require("../../config/keys");

module.exports = (survey) => {
  // we will add es6 formats laters
  // return "<p>" + survey + ". HTML email body</p>";
  return `
      <html>
      <body>
      <div style="text-align:center;">
      <h3>We'd like you input!</h3>
      <p>Please answer the following</p>
      <p>
      ${survey.body}
      </p>
      <div > 
       <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
      </div>
      
      <div > 
        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
      </div>
      
      
      </div>
      </body>
      </html>
  `;
};
