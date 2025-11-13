import { useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const { data } = await api.post(endpoint, form);

      // Eğer kullanıcı giriş yaptıysa, AuthContext’e aktar
      login(data);

      // Giriş veya kayıt sonrası sohbet sayfasına yönlendir
      navigate("/chat");
    } catch (err) {
      setError(err.response?.data?.message || "Bir hata oluştu!");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "80px auto", textAlign: "center" }}>
      <h2>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Kullanıcı adı"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <input
          placeholder="Şifre"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px", marginTop: "10px" }}>
          {isLogin ? "Giriş" : "Kayıt"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginTop: "10px", cursor: "pointer", color: "blue" }}
      >
        {isLogin ? "Hesabın yok mu? Kayıt ol" : "Zaten hesabın var mı? Giriş yap"}
      </p>
    </div>
  );
}
