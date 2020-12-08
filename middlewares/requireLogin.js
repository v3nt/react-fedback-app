module.exports = (req, res, next) => {
  if (!req.users) {
    return res.status(401).send({ error: "Please log in." });
  }
  // if all good continue
  next();
};
