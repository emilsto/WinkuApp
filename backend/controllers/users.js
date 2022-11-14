import User from "../models/user_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const existingUser = await User.findOne({ where: { username: req.body.username } });
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
        bio: req.body.bio,
        image: req.body.image,
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
        message: "Username does not exist!",
        });
        return;
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        res.status(400).send({
        message: "Invalid password!",
        });
        return;
    }

    //create and assign a token
    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
    res.cookie('auth-token', token).send(token);
    console.log("User logged in successfully!");
}

export const logOutUser = async (req, res) => {
    //get token from cookie, verify it, and remove it
    const token = req.cookies['auth-token'];
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        res.cookie('auth-token', '').send('Logged out successfully!');
    } catch (error) {
        res.status(400).send('Invalid token');
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.status(500).send({
        message: error.message || "Some error occurred while retrieving users.",
        });
    }
}

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
}




