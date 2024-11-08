import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", authenticate, authorizeAdmin, getAllUsers);

router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

router.get("/profile", authenticate, getCurrentUserProfile);
router.put("/profile", authenticate, updateCurrentUserProfile);

// ADMIN ROUTES
router.delete("/:id", authenticate, authorizeAdmin, deleteUserById);
router.get("/:id", authenticate, authorizeAdmin, getUserById);
router.put("/:id", authenticate, authorizeAdmin, updateUserById);
export default router;
