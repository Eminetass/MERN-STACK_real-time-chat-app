import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import { useAuth } from "../context/AuthContext";

export default function ChatPage() {
  const { user } = useAuth();
  if (!user) return <p style={{ textAlign: "center", marginTop: 40 }}>Giriş yapmalısınız.</p>;
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
