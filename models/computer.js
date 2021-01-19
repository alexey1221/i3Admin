const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const computerSchema = new Schema({
  computerId: String,
  computerName: String,
  group: String,
  status: Boolean,
  computerKey: String,
  endPointKey: String,
});

module.exports = mongoose.model("computer", computerSchema);
