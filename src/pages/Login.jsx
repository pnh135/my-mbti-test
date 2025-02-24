import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);

      const userData = {
        id: response.userId,
        nickname: response.nickname,
        accessToken: response.accessToken,
      };

      setUser(userData);
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
};

export default Login;
