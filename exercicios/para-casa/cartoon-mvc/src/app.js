const express = require("express");
const cartoonRoutes = require("./routes/cartoonRoutes");

const app = express();
app.use(express.json());
app.use("/cartoons", cartoonRoutes);
module.exports = app;
