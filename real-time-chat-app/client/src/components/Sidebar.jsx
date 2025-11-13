import { useState, useEffect } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/users");
        setUsers(data);
      } catch (err) {
        console.error("Kullanıcılar alınamadı:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#fff",
        borderRight: "1px solid #ddd",
        padding: "10px",
      }}
    >
      <h3>Hoşgeldin, {user?.username}</h3>
      <button
        onClick={logout}
        style={{
          width: "100%",
          backgroundColor: "#ff4d4f",
          color: "white",
          padding: "6px",
          border: "none",
          cursor: "pointer",
          marginTop: "5px",
        }}
      >
        Çıkış Yap
      </button>

      <h4 style={{ marginTop: "20px" }}>Kullanıcılar</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((u) => (
          <li
            key={u._id}
            style={{
              padding: "6px",
              background: "#f5f5f5",
              margin: "4px 0",
              borderRadius: "5px",
            }}
          >
            {u.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
