// [LOAD PACKAGES]
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.json());

// [CONFIGURE CORS]
app.use(cors());

// [CONFIGURE FILE UPLOAD]
app.use(fileUpload());

// [CONFIGURE SERVER PORT]
const port = process.env.PORT || 3000;

// CONNECT TO MONGODB SERVER
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

// mongoose.connect("mongodb://localhost:27017/i3Admin");
mongoose.connect(
  "mongodb+srv://admin:adminPassword@cluster0.hptab.mongodb.net/i3Admin"
);

// [CONFIGURE ROUTER]
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

// [FILE UPLOAD API]
app.use(express.static("uploads"));
// file upload api
app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" });
  }
  // accessing the file
  const myFile = req.files.file;

  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/uploads/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
});

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
