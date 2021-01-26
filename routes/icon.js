const express = require("express");
const router = express.Router();
const Icon = require("../models/icon");
const path = require("path");

router.get("/:company_id", (req, res) => {
  let searchQuery = {};
  if (req.params.company_id && req.params.company_id != "admin") {
    searchQuery = { company: req.params.company_id };
  }
  Icon.find(searchQuery)
    .populate("company")
    .then((icons) => {
      res.json(icons);
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const myFile = req.files.file;

  const fileName = new Date().getTime() + "-" + myFile.name;

  //  mv() method places the file inside public directory
  myFile.mv(path.join(__dirname, "../uploads/" + fileName), function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }

    // returing the response with file path and name
    const icon = new Icon({
      name: req.body.name,
      path: req.body.path,
      status: req.body.status,
      filePath: fileName,
      company: req.body.company,
    });

    icon.save((err, icon) => {
      if (err) {
        res.json({
          result: 0,
          message: err.message,
        });
        return;
      }
      res.json({ result: 1, data: icon });
    });
  });
});

router.put("/:icon_id", (req, res) => {
  const updateObject = {
    name: req.body.name,
    path: req.body.path,
    status: req.body.status,
  };

  if (req.files) {
    const myFile = req.files.file;
    const fileName = new Date().getTime() + "-" + myFile.name;

    myFile.mv(path.join(__dirname, "../uploads/" + fileName), function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send({ msg: "Error occured" });
      }

      updateObject["filePath"] = fileName;

      Icon.update(
        { _id: req.params.icon_id },
        { $set: updateObject },
        (err, output) => {
          if (err) res.status(500).json({ error: "database failure" });
          console.log(output);
          if (!output.n)
            return res.status(404).json({ error: "icon not found" });
          res.json({ message: "icon updated" });
        }
      );
    });
  } else {
    Icon.update(
      { _id: req.params.icon_id },
      { $set: updateObject },
      (err, output) => {
        if (err) res.status(500).json({ error: "database failure" });
        console.log(output);
        if (!output.n) return res.status(404).json({ error: "icon not found" });
        res.json({ message: "icon updated" });
      }
    );
  }
});

router.delete("/:icon_id", (req, res) => {
  Icon.remove({ _id: req.params.icon_id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.json({ message: "icon deleted" });
  });
});

module.exports = router;
