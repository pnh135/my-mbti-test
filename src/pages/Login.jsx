import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { user, handleLogin } = useContext(AuthContext);

  console.log(user);

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
    <>
      <AuthForm mode="login" onSubmit={handleSubmit} />
      <Link to="/signup">회원가입하기</Link>
    </>
  );
};

export default Login;
