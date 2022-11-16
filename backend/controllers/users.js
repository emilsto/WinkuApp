import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Create and Save a new User
export const createUser = async (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //check if username already exists
  const existingUser = await User.findOne({
    where: { username: req.body.username },
  });
  if (existingUser) {
    res.status(400).send({
      message: "Username already exists!",
    });
    return;
  }

  // Create a User
  const user = {
    username: req.body.username,
    password: req.body.password,
    //bio: req.body.bio,
    //image: req.body.image,
  };

  // hash password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // Save User in the database
  try {
    const newUser = await User.create(user);
    res.send(newUser);
    console.log("User created successfully!");
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};

// Delete user from the database
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).send({
        message: "User not found",
      });
      return;
    }
    await user.destroy();
    res.send({
      message: "User was deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Could not delete User with id=" + id,
    });
  }
};

// Update user in the database

export const updateUser = async (req, res) => {
  const id = req.params.id;
  
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).send({
        message: "User not found",
      });
      return;
    }
    await user.update(req.body);
    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: "Could not update User with id=" + id,
    });
  }
};

export const loginUser = async (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //check if username exists
  const user = await User.findOne({ where: { username: req.body.username } });
  if (!user) {
    res.status(400).send({
      message: "Check your username and password",
    });
    return;
  }

  //log the user info
  console.log(user);

  //check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    res.status(400).send({
      message: "Check your username and password",
    });
    return;
  }


  //create and assign a token
  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
  res.cookie("auth-token", token).send(token);
  console.log("User logged in successfully!");
};

export const logOutUser = async (req, res) => {
  //get token from cookie, verify it, and remove it
  const token = req.cookies["auth-token"];
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    res.cookie("auth-token", "").send("Logged out successfully!");
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving users.",
    });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving user.",
    });
  }
};
