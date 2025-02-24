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
    <div>
      <h1>테스트 결과 페이지</h1>
      {testResults.map((item) => {
        return <TestResultItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TestResult;
