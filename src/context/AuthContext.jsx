import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.authenticated) {
          setUser(res.data.userId);
        }
      })
      .catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      { withCredentials: true }
    );
    setUser(email);
    window.location.href = "/";
  };

  const logout = async () => {
    await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
