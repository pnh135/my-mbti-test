import { createContext, useState } from "react";
import { login } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!localStorage.getItem("accessToken");

  const handleLogin = async (userData) => {
    const response = await login(userData);
    const token = response.accessToken;
    localStorage.setItem("accessToken", token);
    // if (response.status !== 200) {
    //   throw new Error("로그인에 실패하였습니다.");
    // }

    setUser(response);
  };
  const logout = async () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, logout, user, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
