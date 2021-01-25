const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
  },
  firstName: String,
  lastName: String,
  companyName: String,
  status: Boolean,
  email: String,
  firebaseId: String,
});

module.exports = mongoose.model("user", userSchema);
