module.exports = (req, res, next) => {
  if (!req.user.credits < 1) {
    return res.status(403).send({ error: "You need more credits." });
  }
  // 402 = payment required.
  // 403 not authorised to do this
  // if all good continue
  next();
};
