const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const router = require("./router");

const PORT = process.env.PORT || 3000;

//adding bosyparser the project
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//add session to the project
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

//load static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use("/route", router);

//create a homeroute

app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
