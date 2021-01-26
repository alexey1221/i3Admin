const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
  },
  firstName: String,
  lastName: String,
  status: Boolean,
  email: String,
  firebaseId: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
});

module.exports = mongoose.model("user", userSchema);
