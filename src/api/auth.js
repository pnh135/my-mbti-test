import axios from "axios";

// JWT에 액세스하는 URL
const API_URL = "https://www.nbcamp-react-auth.link";

// 회원가입에 접근
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 로그인에 접근
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (userData, token) => {
  const response = await axios.patch(`${API_URL}/profile`, userData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// export const updateProfile = async (formData) => {
//   try {
//     const token = localStorage.getItem("accessToken");
//     if (!token) throw new Error("로그인이 필요합니다.");
//     const response = await axios.patch(`${API_URL}/profile`, formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("프로필 업데이트 실패:", error);
//     throw error;
//   }
// };
