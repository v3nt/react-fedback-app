const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

// mongoose.model("surveys", recipientSchema);

// for it to be a subdoc
module.exports = recipientSchema;
