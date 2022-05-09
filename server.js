require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use("/weathersplash", express.static("build"));

app.get("/weathersplash", (req, res) => {
  res.send("WeatherSplash");
});

app.listen(port, () => {
  console.log(`> WeatherSplash listening on port: ${port}`);
});
