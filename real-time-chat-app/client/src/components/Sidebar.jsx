import { useEffect, useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/users"); // server tarafında /api/users olmalı
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div style={{ width: 260, background: "#fff", borderRight: "1px solid #ddd", padding: 12 }}>
      <div style={{ marginBottom: 12 }}>
        <strong>{user?.username}</strong>
        <div>
          <button onClick={logout} style={{ marginTop: 8 }}>Çıkış</button>
        </div>
      </div>

      <h4>Kullanıcılar</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(u => (
          <li key={u._id} style={{ padding: 8, borderRadius: 6, background: "#f5f5f5", marginBottom: 6 }}>
            {u.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
