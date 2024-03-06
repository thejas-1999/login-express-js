const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//create a homeroute

app.get("/", (req, res) => {
  res.render();
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
