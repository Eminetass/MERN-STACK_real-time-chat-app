import { useState } from "react";
import { socket } from "../socket";
import { useAuth } from "../context/AuthContext";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const send = () => {
    if (!text.trim()) return;
    const msg = { sender: user.username, content: text };
    socket.emit("send:message", msg); // server expects "send:message"
    setText("");
  };

  return (
    <div style={{ display: "flex", padding: 8, background: "#fff", borderTop: "1px solid #ddd" }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Mesaj yaz..." style={{ flex: 1, padding: 8 }} />
      <button onClick={send} style={{ marginLeft: 8, padding: "8px 12px" }}>Gönder</button>
    </div>
  );
}
