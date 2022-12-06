import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  getPostsByUserId,
  getPostsByUserName,
  getPostsByPage,
  getEpicPosts,
  likePost,
  getPostByUserNameAndId,
} from "../controllers/post.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/posts/epic", getEpicPosts);
router.put("/posts/like/:id", likePost);
router.get("/posts/:id", getPostById);
router.get("/posts/id:id", getPostsByUserId);
router.get("/posts/pages/:page", getPostsByPage);
router.get("/profile/:username", getPostsByUserName);
router.get("/posts/:username/:id", getPostByUserNameAndId);

//route order matters, so put static routes at the top

export default router;
