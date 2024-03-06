const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

//create a homeroute

app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
