const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("IN PROGRESS");
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});