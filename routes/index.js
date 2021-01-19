const express = require("express");
const router = express.Router(); //make a new router

const userRoutes = require("./user");
const computerRoutes = require("./computer");
const messageRoutes = require("./message");

router.use("/users", userRoutes);
router.use("/computers", computerRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
