const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const iconSchema = new Schema({
  name: String,
  path: String,
  status: Boolean,
  filePath: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
});

module.exports = mongoose.model("icon", iconSchema);
