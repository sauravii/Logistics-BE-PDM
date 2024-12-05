const Stock = require("../models/Stock");

exports.getAllStocks = async (req, res) => {
  const stocks = await Stock.findAll();
  res.json(stocks);
};

exports.createStock = async (req, res) => {
  const { itemName, quantity, supplierId } = req.body;
  const stock = await Stock.create({ itemName, quantity, supplierId });
  res.json(stock);
};
