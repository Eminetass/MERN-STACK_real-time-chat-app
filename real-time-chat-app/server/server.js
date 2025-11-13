import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import socketHandler from "./socket/socketHandler.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: process.env.CLIENT_URL } });
socketHandler(io);

server.listen(process.env.PORT, () =>
  console.log(`✅ Server ${process.env.PORT} portunda çalışıyor`)
);
