const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Initialize Firebase-Admin SDK
var admin = require("firebase-admin");
var serviceAccount = require("../firebase-admin.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebase = require("firebase");
const fbClientConfig = require("../firebase-client.json");
firebase.initializeApp(fbClientConfig);

router.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json(users);
  });
});

router.post("/getEmailByUserName", (req, res) => {
  User.findOne({ userName: req.body.username }, (err, user) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json(user);
  });
});

router.post("/getUserByEmail", (req, res) => {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json({ result: user.length > 0 ? 1 : 0 });
  });
});

router.post("/", async (req, res) => {
  try {
    // Create User to the Firebase using FB-Admin SDK
    const userRecord = await admin.auth().createUser({
      email: req.body.email,
      displayName: req.body.firstName + " " + req.body.lastName,
    });
    // Create CustomToken
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    // Sign-in To the Firebaes Client  using CustomToken
    const userCredential = await firebase
      .auth()
      .signInWithCustomToken(customToken);

    // Send EmailVerification
    firebase.auth().onAuthStateChanged(function (user) {
      const actionCodeSettings = {
        url: "https://i3admin.azurewebsites.net",
        handleCodeInApp: true,
      };
      user.sendEmailVerification(actionCodeSettings);
    });

    let user = new User(req.body);
    user["firebaseId"] = userRecord.uid;
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
  } catch (error) {
    console.log(error.message);
    res.json({
      result: 0,
      message: error.message,
    });
  }
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
  // Remove from Firebase
  User.findById(req.params.user_id, async (err, user) => {
    if (err) res.status(500).send(err);
    await admin.auth().deleteUser(user.firebaseId);

    // Remove from MongoDB
    User.remove({ _id: req.params.user_id }, function (err, output) {
      if (err) return res.status(500).json({ error: "database failure" });
      res.json({ message: "user deleted" });
    });
  });
});

module.exports = router;
