import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  getTopPostsComments,
  getPostsByUserId,
  getPostsByUserName,
  getPostsByPage,
  getEpicPosts,
} from "../controllers/post.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/top", getTopPostsComments);
router.get("/posts/epic", getEpicPosts);
router.post("/posts", createPost);
router.get("/posts/:id", getPostById);
router.get("/posts/id:id", getPostsByUserId);
router.get("/posts/pages/:page", getPostsByPage);
router.get("/profile/:username", getPostsByUserName);





//route order matters, so put static routes at the top



export default router;
