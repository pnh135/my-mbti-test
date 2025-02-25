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
      <div className="bg-blue-950 rounded-lg shadow-md p-9 hover:shadow-lg transition-shadow relative">
        <div className="text-yellow-400 font-bold text-2xl">
          {item.nickname}
        </div>
        <div className="text-slate-500 text-right">{item.date}</div>
        <div className="text-white font-bold text-2xl"> {item.mbtiResult}</div>
        <div className="text-white">
          {mbtiDescriptions[item.mbtiResult] ||
            "해당 성격 유형에 대한 설명이 없습니다."}
        </div>

        {item.isOwer === user?.id ? (
          <div className="space-x-5">
            <button
              className="bg-blue-400  text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => updataTestResultVisibility()}
            >
              비공개로 전환
            </button>
            <button
              className="bg-red-300  text-white py-2 rounded-lg hover:bg-red-400 transition duration-300 w-10"
              onClick={(isOwer) => deleteTestResult(isOwer)}
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
