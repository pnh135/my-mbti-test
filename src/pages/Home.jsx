import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>무료 성격 테스트</h1>
      <div>
        <p>성격 유형 검사</p>
        <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
        <span>
          자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
          알아보세요.
        </span>
      </div>
      <div>
        <p>성격 유형 이해</p>
        <span>
          다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
        </span>
      </div>
      <div>
        <p>팀 평가</p>
        <span>
          팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
          배워보세요.
        </span>
      </div>

      <Link to="/test">테스트 시작</Link>
    </div>
  );
};

export default Home;
