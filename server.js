require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.send("WeatherSplash");
});

app.listen(port, () => {
  console.log(`> WeatherSplash listening on port: ${port}`);
});
