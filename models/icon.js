const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const iconSchema = new Schema({
  name: String,
  path: String,
  status: Boolean,
  filePath: String,
});

module.exports = mongoose.model("icon", iconSchema);
