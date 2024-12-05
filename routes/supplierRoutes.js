const express = require("express");
const { getAllSuppliers, createSupplier } = require("../controllers/supplierController");
const router = express.Router();

router.get("/", getAllSuppliers);
router.post("/", createSupplier);

module.exports = router;
