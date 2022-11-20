import { fn, Sequelize } from "sequelize";
import db from "../config/database.js";
import bcrypt from "bcryptjs";

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

export default User;
