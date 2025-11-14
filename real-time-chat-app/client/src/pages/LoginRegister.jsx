import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await login(form.username, form.password);
      } else {
        await register(form.username, form.password);
      }
      navigate("/chat");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Hata");
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "80px auto", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h2>
      <form onSubmit={submit}>
        <input
          required
          placeholder="Kullanıcı adı"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          required
          type="password"
          placeholder="Şifre"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <button style={{ width: "100%", padding: 10 }} type="submit">
          {isLogin ? "Giriş" : "Kayıt"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p style={{ marginTop: 12 }}>
        <span
          onClick={() => { setIsLogin(!isLogin); setError(""); }}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {isLogin ? "Hesabın yok mu? Kayıt ol" : "Zaten hesabın var mı? Giriş yap"}
        </span>
      </p>
    </div>
  );
}
