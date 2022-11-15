import Post from '../models/post_model';
import User from '../models/user_model';
import jwt from 'jsonwebtoken';


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
    const token = req.header('x-auth-token');
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
}

// Retrieve all Posts from the database.
export const findAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: ['content', 'likes', 'dislikes', 'createdAt'],
            include: [{
                User,
                attributes: ['username', 'bio', 'profilePicture'],
            },],
            order: [
                ['createdAt']
            ]
        });
        res.send(posts);
    } catch (error) {
        res.status(500).send({
        message: error.message || "Some error occurred while retrieving posts.",
        });
    }
}

