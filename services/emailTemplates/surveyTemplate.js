// return html for Mailer

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
       <a href="http://localhost:3000">Yes</a>
      </div>
      
      <div > 
        <a href="http://localhost:3000">No</a>
      </div>
      
      
      </div>
      </body>
      </html>
  `;
};
