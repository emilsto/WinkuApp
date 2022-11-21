import User from "./user_model.js";
import Post from "./post_model.js";
import Relationship from "./relationship_model.js";
import Comment from "./comment_model.js";

const Associations = () => {
  // user has many posts, post belongs to user with userId
  User.hasMany(Post, {
    foreignKey: "userId",
    as: "posts",
  });
  Post.belongsTo(User, {});

  // user has many followers, follower belongs to user with followerId
  User.hasMany(Relationship, {
    foreignKey: "follower_id",
    as: "followers",
  });
  Relationship.belongsTo(User, {});

  // comment belongs to user with userId
  User.hasMany(Comment, {
    foreignKey: "userId",
    as: "comments",
  });
  Comment.belongsTo(User, {});

  // comment belongs to post with postId
  Post.hasMany(Comment, {
    foreignKey: "postId",
    as: "comments",
  });
  Comment.belongsTo(Post, {});
};

export default Associations;
