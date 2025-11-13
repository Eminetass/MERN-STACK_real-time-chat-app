import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
  const { receiverId } = req.params;
  const messages = await Message.find({
    $or: [
      { sender: req.user.id, receiver: receiverId },
      { sender: receiverId, receiver: req.user.id }
    ]
  }).populate("sender receiver", "username");
  res.json(messages);
};
