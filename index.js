const express = require("express");
const sequelize = require("./config/database");
const stockRoutes = require("./routes/stockRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

app.use("/stocks", stockRoutes);
app.use("/suppliers", supplierRoutes);
app.use("/transactions", transactionRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
});
