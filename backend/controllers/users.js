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
  try {
    if (!req.body.username || !req.body.password) {
      const error = new Error("Username or password is missing");
      error.statusCode = 401;
      throw error;
    }

    //check if username exists
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      const error = new Error("Username does not exist");
      error.statusCode = 401;
      throw error;
    }

    //log the user info
    console.log(user);

    //check if password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      const error = new Error("Password is incorrect");
      error.statusCode = 401;
      throw error;
    }
    //create and assign a token

    //set payload to user id, username, bio and image

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        bio: user.bio,
        image: user.image,
      },
    };

    //remove password , id and bio from user object
    delete user.dataValues.password;
    delete user.dataValues.id;
    delete user.dataValues.bio;

    console.log(user);

    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    res.cookie("auth_token", token).send({ user: user, token: token });
    console.log("User logged in successfully!");
  } catch (error) {
    console.log(error);
    //res message
    res.status(error.status || 500).send(error);
  }
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

//checlk if user is logged in
export const isLoggedIn = async (req, res) => {
  const token = req.body.token;
  console.log(token);
  if (!token) {
    return res.status(401).send("Access Denied");
  } else {
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = verified.user;
      console.log(user);

      res.send({ token: token, user: user });
    } catch (error) {
      res.status(400).send(false);
      console.log(error);
    }
  }
};
