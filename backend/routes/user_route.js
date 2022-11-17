import express from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser, loginUser, logOutUser, verifyUser } from "../controllers/users.js";

const router = express.Router();


router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/create", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);
router.post("/verify", verifyUser);

export default router;