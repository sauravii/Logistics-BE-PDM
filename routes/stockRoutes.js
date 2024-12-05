const express = require("express");
const { getAllStocks, createStock } = require("../controllers/stockController");
const router = express.Router();

router.get("/", getAllStocks);
router.post("/", createStock);

module.exports = router;
