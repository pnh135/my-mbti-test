import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // 완성된 로직들이 아니에요! 참고만 하세요!
  const handleSignup = async (formData) => {
    try {
      await register(formData);
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error("Login error:", error);
    }
  };

  return <AuthForm mode="signup" onSubmit={handleSignup} />;
};

export default Signup;
