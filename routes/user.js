const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json(users);
  });
});

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      res.json({
        result: 0,
        message: err.message,
      });
      return;
    }
    res.json({ result: 1, data: user });
  });
});

router.put("/:user_id", (req, res) => {
  User.update(
    { _id: req.params.user_id },
    { $set: req.body },
    (err, output) => {
      if (err) res.status(500).json({ error: "database failure" });
      console.log(output);
      if (!output.n) return res.status(404).json({ error: "user not found" });
      res.json({ message: "user updated" });
    }
  );
});

router.delete("/:user_id", (req, res) => {
  User.remove({ _id: req.params.user_id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.json({ message: "user deleted" });
  });
});

module.exports = router;
