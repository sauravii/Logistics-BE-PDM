const Transaction = require("../models/Transaction");

exports.getAllTransactions = async (req, res) => {
  const transactions = await Transaction.findAll();
  res.json(transactions);
};

exports.createTransaction = async (req, res) => {
  const { type, itemId, quantity, totalPrice } = req.body;
  const transaction = await Transaction.create({ type, itemId, quantity, totalPrice });
  res.json(transaction);
};
