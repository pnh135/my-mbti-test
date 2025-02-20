import { createContext, useState } from "react";

const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
