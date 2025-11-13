import { useState } from "react";
import { socket } from "../socket";
import { useAuth } from "../context/AuthContext";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const sendMessage = () => {
    if (!text.trim()) return;
    socket.emit("sendMessage", { user: user.username, text });
    setText("");
  };

  return (
    <div style={{ display: "flex", padding: "10px", background: "#fff" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Mesaj yaz..."
        style={{ flex: 1, padding: "8px" }}
      />
      <button
        onClick={sendMessage}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Gönder
      </button>
    </div>
  );
}
