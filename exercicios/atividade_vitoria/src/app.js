const express = require("express");
const scoobyDoo = require("./routes/scoobyDooRoutes");

const app = express();

app.use(express.json());

app.use("/cartoon", scoobyDoo);

module.exports = app;