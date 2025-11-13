import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: "Kullanıcı zaten var" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashed });
    res.json({ message: "Kayıt başarılı", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Hatalı şifre" });

    const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
