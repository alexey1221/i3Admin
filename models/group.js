const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: String,
  computers: [{ type: mongoose.Schema.Types.ObjectId, ref: "computer" }],
  backgroundImage: String,
  activeIcons: Object,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
});

module.exports = mongoose.model("group", groupSchema);
