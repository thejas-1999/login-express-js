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
    res.redirect("/route/dashboard");
    /*  res.end("Welcome"); */
  } else {
    res.end("Invalid username or password");
  }
});

//route for dashboard

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { User: req.session.user });
  } else {
    res.end(`Unautherised User`);
  }
});

//logout route

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.render("base", { title: "Express", logout: "Logout Successfully!" });
    }
  });
});

module.exports = router;
