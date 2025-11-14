import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // login using API call
  const login = async (username, password) => {
    const res = await api.post("/auth/login", { username, password });
    const data = res.data;
    // server returns { token, user } on login (as in provided server example)
    localStorage.setItem("user", JSON.stringify(data.user || data));
    setUser(data.user || data);
    return data;
  };

  // register then login
  const register = async (username, password) => {
    await api.post("/auth/register", { username, password });
    // after register, call login to get token/user
    return await login(username, password);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
