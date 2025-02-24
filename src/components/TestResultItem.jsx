import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import {
  deleteTestResult,
  getTestResults,
  updataTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = () => {
  const { user } = useContext(AuthContext);

  getTestResults.filter(user);

  return (
    <>
      <div>
        <div>{testResults.nickname}</div>
        <div>{testResults.date}</div>
        <div>{testResults.mbtiResult}</div>
        <div>
          {mbtiDescriptions[testResults] ||
            "해당 성격 유형에 대한 설명이 없습니다."}
        </div>

        {isOwer === user.id ? (
          <div>
            <button onClick={() => updataTestResultVisibility()}>
              비공개로 전환
            </button>
            <button onClick={() => deleteTestResult()}>삭제</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TestResultItem;
