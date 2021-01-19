const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.get("/", (req, res) => {
  Message.find((err, messages) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json(messages);
  });
});

router.post("/", (req, res) => {
  const message = new Message(req.body);
  message.save((err, message) => {
    if (err) {
      res.json({
        result: 0,
        message: err.message,
      });
      return;
    }
    res.json({ result: 1, data: message });
  });
});

router.put("/:message_id", (req, res) => {
  Message.update(
    { _id: req.params.message_id },
    { $set: req.body },
    (err, output) => {
      if (err) res.status(500).json({ error: "database failure" });
      console.log(output);
      if (!output.n)
        return res.status(404).json({ error: "message not found" });
      res.json({ message: "message updated" });
    }
  );
});

router.delete("/:message_id", (req, res) => {
  Message.remove({ _id: req.params.message_id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.json({ message: "message deleted" });
  });
});

module.exports = router;
