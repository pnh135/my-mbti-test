import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultItem from "../components/TestResultItem";

const TestResult = () => {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const fetchTestResult = async () => {
      try {
        const res = await getTestResults();
        setTestResults(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestResult();
  }, []);

  return (
    <div className="flex min-h-full flex-col gap-10 justify-between px-6 py-3 lg:px-8 bg-slate-200">
      <h1 className="text-center text-3xl font-bold tracking-tight">
        테스트 결과 페이지
      </h1>
      {testResults.map((item) => {
        return <TestResultItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TestResult;
