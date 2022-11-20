import User from "./user_model.js";
import Post from "./post_model.js";

const Associations = () => {
  // user has many posts, post belongs to user with userId
  User.hasMany(Post, {
    foreignKey: "userId",
    as: "posts",
  });
  Post.belongsTo(User, {});
};

export default Associations;
