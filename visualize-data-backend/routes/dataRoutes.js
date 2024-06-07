const express = require("express");
const { getAllData, filterData } = require("./../controller/dataController");

const router = express.Router();

router.get("/", getAllData);

//filter
router.get("/filter", filterData);

module.exports = router;
