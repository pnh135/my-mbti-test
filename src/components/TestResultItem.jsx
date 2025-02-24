import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import {
  deleteTestResult,
  updataTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = ({ item }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="bg-black rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative">
        <div className="text-yellow-400 font-bold">{item.nickname}</div>
        <div className="text-white">{item.date}</div>
        <div className="text-white"> {item.mbtiResult}</div>
        <div className="text-white">
          {mbtiDescriptions[item.mbtiResult] ||
            "해당 성격 유형에 대한 설명이 없습니다."}
        </div>

        {item.isOwer === user?.id ? (
          <div>
            <button
              className="bg-blue-400"
              onClick={() => updataTestResultVisibility()}
            >
              비공개로 전환
            </button>
            <button
              className="bg-red-300"
              onClick={(id) => deleteTestResult(id)}
            >
              삭제
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TestResultItem;
