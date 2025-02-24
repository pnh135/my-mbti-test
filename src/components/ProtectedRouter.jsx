import React from "react";
import useAuthStore from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const { user } = useAuthStore();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
