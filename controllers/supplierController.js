const Supplier = require("../models/Supplier");

exports.getAllSuppliers = async (req, res) => {
  const suppliers = await Supplier.findAll();
  res.json(suppliers);
};

exports.createSupplier = async (req, res) => {
  const { name, contactInfo } = req.body;
  const supplier = await Supplier.create({ name, contactInfo });
  res.json(supplier);
};
