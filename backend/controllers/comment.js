import User from "../models/user_model.js";
import Comment from "../models/comment_model.js";
import jwt from "jsonwebtoken";

// Create and Save a new Comment
export const createComment = async (req, res) => {
  // Validate request

  console.log(req.body);
  if (!req.body.content) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Get user id from token
  const token = req.headers.authorization;
  console.log(token);
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(decoded.user);

  // Create a Comment
  const comment = {
    content: req.body.content,
    userId: decoded.user.id,
    postId: req.body.postId,
  };

  const user = {
    username: decoded.user.username,
    image: decoded.user.image,
    bio: decoded.user.bio,
    isAdmin: decoded.user.isAdmin,
  };
  // Save Comment in the database
  try {
    let newComment = await Comment.create(comment);
    //add current date to comment
    newComment.dataValues.createdAt = new Date().toISOString();
    //add user to comment
    newComment.dataValues.user = user;

    res.send(newComment);
    console.log("Comment created successfully!");
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Comment.",
    });
  }
};

// Retrieve all Comments from the database.
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      attributes: ["id", "content", "createdAt"],
      include: [
        {
          // include the User model here:
          model: User,
          attributes: ["username", "bio", "image"], // only return the username, bio and image
        },
      ],
    });
    res.send(comments);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving comments.",
    });
  }
};

// Find a single Comment with an id
export const getComment = async (req, res) => {
  const id = req.params.id;
  try {
    const comment = await Comment.findByPk(id, {
      attributes: ["id", "content", "createdAt"],
      include: [
        {
          // include the User model here:
          model: User,
          attributes: ["username", "bio", "image"], // only return the username, bio and image
        },
      ],
    });
    res.send(comment);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving comments.",
    });
  }
};
