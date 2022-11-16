import Post from "../models/post_model.js";
import User from "../models/user_model.js";
import jwt from "jsonwebtoken";

// Create and Save a new Post
export const createPost = async (req, res) => {
  // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //verify token
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).send({
      message: "No token, authorization denied",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
  } catch (error) {
    res.status(401).send({
      message: "Token is not valid",
    });
    return;
  }

  // Create a Post
  const post = {
    content: req.body.content,
    userId: req.user.id,
  };

  // Save Post in the database
  try {
    const newPost = await Post.create(post);
    res.send(newPost);
    console.log("Post created successfully!");
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Post.",
    });
  }
};

// Retrieve all Posts from the database.
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "content", "likes", "dislikes", "createdAt"],
      include: [
        {
          // include the User model here:
          model: User,
          attributes: ["username", "bio", "image"], // only return the username, bio and image

          // include the Post model here:
        
          },
      ],
      order: [["createdAt"]],
    });
    res.send(posts);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving posts.",
    });
  }
};

// Find a single Post with an id
export const getPostById = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findByPk(id, {
      attributes: ["content", "likes", "dislikes", "createdAt"],
      include: [
        {
          User,
          attributes: ["username", "bio", "profilePicture"],
        },
      ],
    });
    if (!post) {
      res.status(404).send({
        message: "Post not found",
      });
      return;
    }
    res.send(post);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving post.",
    });
  }
}

// Update a Post by the id in the request
export const updatePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      res.status(404).send({
        message: "Post not found",
      });
      return;
    }
    const updatedPost = await post.update({
      content: req.body.content,
    });
    res.send(updatedPost);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating post.",
    });
  }
}

// Delete a Post with the specified id in the request
export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      res.status(404).send({
        message: "Post not found",
      });
      return;
    }
    await post.destroy();
    res.send({ message: "Post was deleted successfully!" });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while deleting post.",
    });
  }
}

// Like a Post with the specified id in the request

export const likePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      res.status(404).send({
        message: "Post not found",
      });
      return;
    }
    const updatedPost = await post.update({
      likes: post.likes + 1,
    });
    res.send(updatedPost);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while liking post.",
    });
  }
}

// Unlike a Post with the specified id in the request

export const unlikePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      res.status(404).send({
        message: "Post not found",
      });
      return;
    }
    const updatedPost = await post.update({
      likes: post.likes - 1,
    });
    res.send(updatedPost);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while unliking post.",
    });
  }
}

// Special method to create a post with a user id

export const createPostWithUserId = async (req, res) => {
  // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Post
  const post = {
    content: req.body.content,
    userId: req.body.userId,
  };

  // Save Post in the database
  try {
    const newPost = await Post.create(post);
    res.send(newPost);
    console.log("Post created successfully!");
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Post.",
    });
  }
}