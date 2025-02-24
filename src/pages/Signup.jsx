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
      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <AuthForm mode="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
