const express = require("express");
const dataRouter = require("./routes/dataRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//using routes for middleware
app.use("/api/data", dataRouter);

module.exports = app;
