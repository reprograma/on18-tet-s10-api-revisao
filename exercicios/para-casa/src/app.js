const desenhosRouter = require("./routes/desenhosRoutes")

const express = require("express");
const app = express();

app.use(express.json());

app.use("/desenhos", desenhosRouter)

module.exports = app;