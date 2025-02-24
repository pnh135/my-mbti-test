import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import useAuthStore from "../store/authStore";

const Login = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);

      const userDataToStore = {
        id: response.userId,
        nickname: response.nickname,
        accessToken: response.accessToken,
      };

      setUser(userDataToStore);
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
};

export default Login;

// import { useNavigate } from "react-router-dom";
// import AuthForm from "../components/AuthForm";
// import { login } from "../api/auth";
// import useAuthStore from "../store/authStore";

// const Login = () => {
//   const navigate = useNavigate();
//   const { setUser } = useAuthStore();

//   // 통신
//   const handleLogin = async (userData) => {
//     try {
//       const response = await login(userData);

//       // user 객체를 직접 생성하여 setUser에 전달
//       const userDataToStore = {
//         id: response.userId,
//         nickname: response.nickname,
//         avatar: response.avatar, // 나중에 프로필 이미지 만들자
//         accessToken: response.accessToken,
//       };

//       setUser(userDataToStore);

//       alert("로그인 성공!");
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       alert("로그인 실패: " + error.message || "알 수 없는 오류");
//     }
//   };

//   return <AuthForm mode="login" onSubmit={handleLogin} />;
// };

// export default Login;
