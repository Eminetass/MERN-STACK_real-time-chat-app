import { useEffect, useState } from "react";
import { socket } from "../socket";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("receiveMessage");
  }, []);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
          background: "#eaeaea",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "5px 0" }}>
            <strong>{msg.user}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
}
