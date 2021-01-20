const express = require("express");
const router = express.Router();
const Group = require("../models/group");
const path = require("path");
const Message = require("../models/message");

router.get("/", (req, res) => {
  Message.find().then((messages) => {
    Group.find()
      .then((groups) => {
        const result = groups.map((group) => {
          let item = {
            _id: group._id,
            computers: group.computers,
            activeIcons: group.activeIcons,
            backgroundImage: group.backgroundImage,
            messageCount: 0,
            name: group.name,
          };
          const messageCount = messages.filter(
            (message) => message.group.toString() == group._id
          ).length;
          item.messageCount = messageCount;
          return item;
        });
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  });
});

router.get("/:group_id", (req, res) => {
  Group.findById(req.params.group_id)
    .then((group) => {
      res.json(group);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/uploadBackground", (req, res) => {
  const myFile = req.files.file;
  const fileName = new Date().getTime() + "-" + myFile.name;

  myFile.mv(path.join(__dirname, "../uploads/" + fileName), function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }

    res.send(fileName);
  });
});

router.post("/", (req, res) => {
  const group = new Group(req.body);
  group.save((err, group) => {
    if (err) {
      res.json({
        result: 0,
        message: err.message,
      });
      return;
    }
    res.json({ result: 1, data: group });
  });
});

router.put("/:group_id", (req, res) => {
  Group.update(
    { _id: req.params.group_id },
    { $set: req.body },
    (err, output) => {
      if (err) res.status(500).json({ error: "database failure" });
      console.log(output);
      if (!output.n) return res.status(404).json({ error: "group not found" });
      res.json({ message: "group updated" });
    }
  );
});

router.delete("/:group_id", (req, res) => {
  Group.remove({ _id: req.params.group_id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.json({ message: "group deleted" });
  });
});

module.exports = router;
