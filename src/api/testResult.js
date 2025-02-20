import axios from "axios";

const API_URL = "http://localhost:4000/testresults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResults = async () => {};
