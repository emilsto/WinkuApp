import { fn, Sequelize } from 'sequelize';

import db from '../config/database';

const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dislikes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: fn('NOW')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: fn('NOW')
    }
});

export default Post;