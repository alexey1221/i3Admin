const express = require("express");
const router = express.Router();
const Computer = require("../models/computer");

router.get("/:company_id", (req, res) => {
  let searchQuery = {};
  if (req.params.company_id && req.params.company_id != "admin") {
    searchQuery = { company: req.params.company_id };
  }
  Computer.find(searchQuery)
    .populate("company")
    .then((computers) => {
      res.json(computers);
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const computer = new Computer(req.body);
  computer.save((err, computer) => {
    if (err) {
      res.json({
        result: 0,
        message: err.message,
      });
      return;
    }
    res.json({ result: 1, data: computer });
  });
});

router.put("/:computer_id", (req, res) => {
  Computer.update(
    { _id: req.params.computer_id },
    { $set: req.body },
    (err, output) => {
      if (err) res.status(500).json({ error: "database failure" });
      console.log(output);
      if (!output.n)
        return res.status(404).json({ error: "computer not found" });
      res.json({ message: "computer updated" });
    }
  );
});

router.delete("/:computer_id", (req, res) => {
  Computer.remove({ _id: req.params.computer_id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.json({ message: "computer deleted" });
  });
});

module.exports = router;
