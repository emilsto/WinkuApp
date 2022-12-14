import Post from "../models/post_model.js";
import User from "../models/user_model.js";
import Comment from "../models/comment_model.js";
import jwt from "jsonwebtoken";
import sequelize from "../config/database.js";
import { QueryTypes } from "sequelize";

// Create and Save a new Post
export const createPost = async (req, res) => {
  // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else if (!req.headers.authorization) {
    res.status(401).send({
      message: "Unauthorized",
    });
    return;
  }

  // Get user id from token
  const token = req.headers.authorization;
  console.log(token);
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(decoded.user);

  //get user

  // Create a Post
  const newPost = {
    content: req.body.content,
    likes: 0,
    dislikes: 0,
    userId: decoded.user.id,
  };
  
  const user = {
      username: decoded.user.username,
      image: decoded.user.image,
      bio: decoded.user.bio,
      isAdmin: decoded.user.isAdmin,
  }

  // Save Post in the database
  try {
    let post = await Post.create(newPost);
    //add new field to post
    post.dataValues.user = user;
    //update the post date to current date
    post.dataValues.createdAt = new Date().toISOString();


    res.status(201).send(post);
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
};

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
};

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
};

// Like a Post with the specified id in the request

export const likePost = async (req, res) => {
  const id = req.params.id;
  console.log("LIKE A POST");

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
      //add user id to likes array

    });
    res.send(updatedPost);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while liking post.",
    });
  }
};


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
    console.log(newPost);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Post.",
    });
  }
};

//get posts by user id

export const getPostsByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    const posts = await Post.findAll({
      where: {
        userId: id,
      },
      attributes: ["id", "content", "likes", "dislikes", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["username", "bio", "image", "isAdmin"],
        },
      ],
      order: ["createdAt"],
    });
    res.send(posts);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving posts.",
    });
  }
};

//get posts by user name

export const getPostsByUserName = async (req, res) => {
  const username = req.params.username;
  try {
    const usr = await User.findOne({
      where: {
        username: username,
      },
      attributes: ["id", "username", "bio", "image", "isAdmin"],
    });
    if (!usr) {
      const error = new Error("User not found");
      error.message = "User not found";
      error.status = 404;
      throw error;
    } else {
      console.log(usr);
      const posts = await Post.findAll({
        where: {
          userId: usr.id,
        },
        attributes: ["id", "content", "likes", "dislikes", "createdAt"],
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: User,
            attributes: ["username", "bio", "image", "isAdmin"],
          },
          {
            model: Comment,
            as : "comments",
          }
        ],
      });
      
      res.send({ posts: posts, user: usr });
    }
  } catch (error) {
    res.status(error.status || 500).send({
      message: error.message || "Some error occurred while retrieving posts.",
    });
  }
};

//form posts to pages. 10 posts per page

export const getPostsByPage = async (req, res) => {
  const page = req.params.page;
  try {
    const posts = await Post.findAll({
      attributes: ["id", "content", "likes", "dislikes", "createdAt", "isEpic"],
      include: [
        {
          model: User,
          attributes: ["username", "bio", "image", "isAdmin"],
        },
        {
          model: Comment,
          as : "comments",
        }
      ],
      order: [["createdAt", "DESC"]],
      limit: 10,
      offset: 10 * (page - 1),
    });
    res.send(posts);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving posts.",
    });
  }
};

//get all epic posts

export const getEpicPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        isEpic: true,
      },
      attributes: ["id", "content", "likes", "dislikes", "createdAt", "isEpic"],
      include: [
        {
          model: User,
          attributes: ["username", "bio", "image", "isAdmin"],
        },
        {
          model: Comment,
          as : "comments",
        }
      ],
      order: [["createdAt", "DESC"]],
      limit: 10,
    });
    res.send(posts);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving posts.",
    });
  }
};

//get post by username and post id
export const getPostByUserNameAndId = async (req, res) => {
  try {
  const username = req.params.username;
  const id = req.params.id;
    const usr = await User.findOne({
      where: {
        username: username,
      },
      attributes: ["id", "username", "bio", "image", "isAdmin"],
    });
    if (!usr) {
      const error = new Error("User not found");
      error.message = "User not found";
      error.status = 404;
      throw error;
    } else {
      const post = await Post.findOne({
        where: {
          id: id,
          userId: usr.id,
        },
        attributes: ["id", "content", "likes", "dislikes", "createdAt"],
        include: [
          {
            model: User,
            attributes: ["username", "bio", "image", "isAdmin"],
          },
          {
            model: Comment,
            attributes: ["id", "content", "createdAt"],
            as: "comments",
            include: [
              {
                model: User,
                attributes: ["username", "bio", "image", "isAdmin"],
              },
            ],
          },

        ],
        order: ["createdAt"],
      });
      res.send(post);
    }
  } catch (error) {
    res.status(error.status || 500).send({
      message: error.message || "Some error occurred while retrieving posts.",
    });
  }
}