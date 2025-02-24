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

export const getUserProfile = async (userData) => {
  const response = await axios.get(`${API_URL}/user`, userData);
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await axios.patch(`${API_URL}/profile`, userData);
  return response.data;
};

// import axios from "axios";

// const API_URL = "https://www.nbcamp-react-auth.link";

// export const register = async (userData) => {
//   const response = await axios.post(`${API_URL}/register`, userData);
//   return response.data;
// };

// export const login = async (userData) => {
//   const response = await axios.post(`${API_URL}/login`, userData);
//   return response.data;
// };

// export const getUserProfile = async (token) => {
//   const response = await axios.get(`${API_URL}/user`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// export const updateProfile = async (formData, token) => {
//   const response = await axios.patch(`${API_URL}/profile`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };
