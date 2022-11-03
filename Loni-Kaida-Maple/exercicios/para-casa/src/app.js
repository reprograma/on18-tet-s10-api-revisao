const express = require("express");
const bokuNoHeroRouter = require("./routes/bokuNoHeroRoutes");

const app = express();

app.use(express.json());
//-----------------------------------//
app.use("/animes", bokuNoHeroRouter);

module.exports = app;