import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Create and Save a new User
export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      const error = new Error("Username and password are required!");
      error.status = 400;
      throw error;
    }
  
    // Check if username already exists
    const existingUser = await User.findOne({
      where: { username: username},
    });
    if (existingUser) {
      console.log("Username already exists!");

      const error = new Error("Username already exists!");
      error.status = 401;
      throw error;
    }
  
    // Set default image
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg";
  
    // Create a User
    let user = {
      username: req.body.username,
      password: req.body.password,
      bio: "update your bio",
      image: defaultImage,
    };

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const newUser = await User.create(user);
    res.send(newUser);
  }
  catch (error) {
    res.status(error.status || 500).
    send(error.message || "Some error occurred while creating the User.");
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

  console.log("req.body");
  try {
        //get user from jwt
        const token = req.body.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.user.id);
    if (!user) {
      res.status(404).send({
        message: "User not found",
      });
      return;
    }
    //update user
    user.username = req.body.username;
    user.bio = req.body.bio;
    user.image = req.body.image;
    await user.save();
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
      error.status = 401;
      throw error;
    }

    //check if username exists
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      const error = new Error("Username does not exist");
      error.status = 401;
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
      error.status = 401;
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
        isAdmin: user.isAdmin,
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

      //search for user in db
      const dbUser = await User.findByPk(user.id);
      if (!dbUser) {
        return res.status(401).send("Access Denied");
      }
      res.send({ token: token, user: user });
    } catch (error) {
      res.status(400).send(false);
      console.log(error);
    }
  }
};
