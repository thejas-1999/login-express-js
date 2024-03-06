var express = require("express");
var router = express.Router();

const credential = {
  email: "admin@example.com",
  password: "admin@123",
};

//loging user
router.post("/login", (req, res) => {
  if (
    req.body.email === credential.email &&
    req.body.password === credential.password
  ) {
    req.session.user = req.body.email;
    /*  res.render("/dashboard"); */
    res.end("Welcome");
  } else {
    res.end("Invalid username or password");
  }
});

module.exports = router;
