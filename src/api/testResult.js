import axios from "axios";

const API_URL = "http://localhost:4000/testresults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResults = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.deletet(`${API_URL}/${id}`, id;
  return response.data;
};

export const updataTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, visibility);
  return response.data;
};
