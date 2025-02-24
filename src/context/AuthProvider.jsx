import { createContext, useState } from "react";
import { login } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  // 로그인 상태 여부 확인
  const isAuthenticated = !!localStorage.getItem("accessToken");

  // accessToken을 localStorage에 저장하여 로그인 상태 유지
  const handleLogin = async (userData) => {
    const response = await login(userData);
    const token = response.accessToken;
    localStorage.setItem("accessToken", token);
    // if (response.status !== 200) {
    //   throw new Error("로그인에 실패하였습니다.");
    // }

    setUser(response);
  };

  // localStorage에 저장된 accessToken을 제거하고 user를 초기값으로 되돌림
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
