const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Stock = require("./Stock");

const Transaction = sequelize.define("Transaction", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.ENUM("purchase", "sale"), allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  totalPrice: { type: DataTypes.FLOAT, allowNull: false },
});

Transaction.belongsTo(Stock, { foreignKey: "itemId" });

module.exports = Transaction;
