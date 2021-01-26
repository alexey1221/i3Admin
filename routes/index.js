const express = require("express");
const router = express.Router(); //make a new router

const userRoutes = require("./user");
const computerRoutes = require("./computer");
const messageRoutes = require("./message");
const iconRoutes = require("./icon");
const groupRoutes = require("./group");
const companyRoutes = require("./company");

router.use("/users", userRoutes);
router.use("/computers", computerRoutes);
router.use("/messages", messageRoutes);
router.use("/icons", iconRoutes);
router.use("/groups", groupRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
