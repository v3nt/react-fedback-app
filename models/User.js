const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// or destructured const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
