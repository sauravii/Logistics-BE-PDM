const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stock = sequelize.define("Stock", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  itemName: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  supplierId: { type: DataTypes.INTEGER, allowNull: true },
});

module.exports = Stock;
