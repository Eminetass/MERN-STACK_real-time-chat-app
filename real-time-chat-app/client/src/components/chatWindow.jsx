import { useEffect, useState } from "react";
import { socket } from "../socket";
import MessageInput from "./MessageInput";
import { useAuth } from "../context/AuthContext";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // join with username so server can mark online
    if (user?.username) socket.emit("join", user.username);

    // server emits "receive:message" per earlier server code
    socket.on("receive:message", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    socket.on("user:online", (username) => {
      // optional: show user online notification
      console.log("online:", username);
    });

    socket.on("user:offline", (username) => {
      console.log("offline:", username);
    });

    return () => {
      socket.off("receive:message");
      socket.off("user:online");
      socket.off("user:offline");
    };
  }, [user]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: 12, overflowY: "auto", background: "#eef2f7" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <strong>{m.sender}</strong>: {m.content}
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
}
