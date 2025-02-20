import axios from "axios";

const API_URL = "";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  // 로그인 정의
};

export const getUserProfile = async (userData) => {
  // 프로필 정의
};

export const updateProfile = async (userData) => {
  //업데이트 정의
};
