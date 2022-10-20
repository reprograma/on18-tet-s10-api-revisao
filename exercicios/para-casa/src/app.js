const express = require("express");
const demonSlayerRouter = require("./routes/demonSlayerRoutes");

const app = express();

app.use(express.json());

app.use("/animes", demonSlayerRouter);

module.exports = app;