const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Supplier = sequelize.define("Supplier", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  contactInfo: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Supplier;
