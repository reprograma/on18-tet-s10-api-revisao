const express = require("express");
const gundamRoutes = require("./routes/gundamRoutes");

const app = express();
app.use(express.json());

app.use("/animes", gundamRoutes);

module.exports = app;