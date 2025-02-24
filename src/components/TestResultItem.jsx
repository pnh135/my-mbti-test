import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import {
  deleteTestResult,
  updataTestResultVisibility,
} from "../api/testResults";

const TestResultItem = () => {
  const { user } = useContext(AuthContext);
  deleteTestResult;
  updataTestResultVisibility;
  return (
    <>
      <div>
        <div>{testResults.id}</div>
        <div>{testResults.timestamp}</div>
        <div>{testResults.result}</div>
        <div>{testResults.mbtiDescriptions}</div>
        <button onClick={() => updataTestResultVisibility()}>
          비공개로 전환
        </button>
        <button onClick={() => deleteTestResult()}>삭제</button>
      </div>
    </>
  );
};

export default TestResultItem;
