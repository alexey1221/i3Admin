const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  activeDate: Date,
  endDate: Date,
  content: String,
  status: Boolean,
  openStatus: { type: Number, default: 0 },
});

module.exports = mongoose.model("message", messageSchema);