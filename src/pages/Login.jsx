import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async (formData) => {
    try {
      handleLogin(formData);
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <AuthForm mode="login" onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
