import { fn, Sequelize } from "sequelize";
import db from "../config/database.js";

const Likes = db.define("likes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "posts",
            key: "id",
        },
    }
});

export default Likes;