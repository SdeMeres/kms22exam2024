import sequelize from "../config/database";
import User from "../models/user";

// Sünkroniseeri mudelid andmebaasiga
async function syncDB() {
  try {
    await sequelize.sync({ force: true });
    console.log("Success");
  } catch (error) {
    console.error("Failed", error);
  }
}

syncDB();
