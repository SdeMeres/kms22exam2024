import { Sequelize } from "sequelize";

// Andmebaasi ühenduse konfiguratsioon
const sequelize = new Sequelize("database_sl", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
