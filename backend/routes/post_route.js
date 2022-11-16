import express from "express";
import { getPosts, getPostById, createPost, updatePost, deletePost, likePost, unlikePost } from "../controllers/post.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts:id", getPostById);
router.post("/posts", createPost);
router.put("/posts:id", updatePost);
router.delete("/posts:id", deletePost);
router.put("/posts:id/like", likePost);
router.put("/posts:id/unlike", unlikePost);

export default router;