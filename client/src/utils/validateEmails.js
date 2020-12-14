const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmails = (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => (re.test(email) ? false : true));

  if (invalidEmails.length) {
    return `these are invalid emails: ${invalidEmails}`;
  }
  //

  return;
};

export default validateEmails;
