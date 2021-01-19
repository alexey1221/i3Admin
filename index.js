// [LOAD PACKAGES]
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const serveStatic = require("serve-static");
const path = require("path");

// [CONFIGURE APP TO USE bodyParser]
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE CORS]
app.use(cors());

// [CONFIGURE SERVER PORT]
const port = process.env.PORT || 3000;

// CONNECT TO MONGODB SERVER
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost:27017/i3Admin");

// [CONFIGURE ROUTER]
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

// [INTEGRATE WITH FRONT-END]
app.use(
  express.static(path.join(__dirname, "/dist"), {
    maxAge: 31557600000,
    setHeaders: function (res) {
      res.set({
        "Cache-control": "no-store, no-cache",
        Pragma: "no-cache",
        Expires: "0",
      });
    },
  })
);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

// [RUN SERVER]
const server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
