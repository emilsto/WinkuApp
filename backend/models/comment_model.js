//model for comment, has a foreign key of post id and user id

import { fn, Sequelize } from "sequelize";
import db from "../config/database.js";

const Comment = db.define("comment", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: fn("NOW"),
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: fn("NOW"),
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "posts",
      key: "id",
    },
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  dislikes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

export default Comment;
