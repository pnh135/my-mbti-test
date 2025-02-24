import {
  deleteTestResult,
  updataTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = ({ item, setTestResults, testResults }) => {
  const itemUpdate = (item) => {
    const updated = updataTestResultVisibility(item.id, item.visibilty);
    setTestResults([...testResults, updated]);
  };

  const itemDelete = (item) => {
    deleteTestResult(item.id);
    const filtered = testResults.filter((result) => result.id !== item.id);
    setTestResults(filtered);
  };
  console.log(item.isOwer);
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
        <br />

        {item.isOwer === localStorage.getItem("userId") ? (
          <div className="space-x-5 text-right">
            <button
              className="inline-block bg-blue-500  text-white py-2 px-5 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => itemUpdate(item)}
            >
              비공개로 전환
            </button>
            <button
              className="inline-block bg-red-400  text-white py-2 px-5 rounded-lg hover:bg-red-00 transition duration-300"
              onClick={() => itemDelete(item)}
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
