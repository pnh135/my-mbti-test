import axios from "axios";

const JS_URL = "http://localhost:4000/testresults";

export const getTestResults = async () => {
  const response = await axios.get(JS_URL);
  return response.data;
};

export const createTestResults = async (resultData) => {
  const response = await axios.post(JS_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${JS_URL}/${id}`);
  return response.data;
};

export const updataTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${JS_URL}/${id}`, { visibility });
  return response.data;
};
