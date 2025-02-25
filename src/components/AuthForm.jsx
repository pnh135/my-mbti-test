import { useState } from "react";
import { Link } from "react-router-dom";

// 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
const AuthForm = ({ mode, onSubmit }) => {
  // 무엇을 formData 에 넣어야 할까요?
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: mode === "signup" ? "" : undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다!
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
        {mode === "signup" && (
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
        )}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-secondary-color transition duration-300 hover:text-[#FF5A5F]"
        >
          {mode === "login" ? "로그인" : "회원가입"}
        </button>
        <div>
          {mode === "login" ? <Link to="/signup">회원가입</Link> : null}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
