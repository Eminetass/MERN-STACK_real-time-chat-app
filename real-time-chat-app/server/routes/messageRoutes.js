import express from "express";
import { getMessages } from "../controllers/messageController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/:receiverId", authMiddleware, getMessages);
export default router;
