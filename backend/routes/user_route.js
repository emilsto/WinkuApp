import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  logOutUser,
  isLoggedIn,
} from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/create", createUser);
router.post("/auth/check", isLoggedIn);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);

export default router;
