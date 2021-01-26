const express = require("express");
const router = express.Router();
const Company = require("../models/company");

router.get("/", (req, res) => {
  Company.find((err, companies) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json(companies);
  });
});

router.post("/", (req, res) => {
  const company = new Company(req.body);
  company.save((err, company) => {
    if (err) {
      res.json({
        result: 0,
        message: err.message,
      });
      return;
    }
    res.json({ result: 1, data: company });
  });
});

router.put("/:company_id", (req, res) => {
  Company.update(
    { _id: req.params.company_id },
    { $set: req.body },
    (err, output) => {
      if (err) res.status(500).json({ error: "database failure" });
      console.log(output);
      if (!output.n)
        return res.status(404).json({ error: "company not found" });
      res.json({ message: "company updated" });
    }
  );
});

router.delete("/:company_id", (req, res) => {
  Company.remove({ _id: req.params.company_id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.json({ message: "company deleted" });
  });
});

module.exports = router;
