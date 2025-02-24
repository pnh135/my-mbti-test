import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <header className="flex min-h-full flex-row justify-between px-6 py-3 lg:px-8 bg-slate-200">
      <h1>
        <Link
          to="/"
          className="text-center text-1xl font-bold tracking-tight text-red-500"
        >
          홈
        </Link>
      </h1>
      <nav>
        {isAuthenticated ? (
          <>
            <div className="space-x-4">
              {" "}
              <Link to="/profile" className="text-red-500 font-semibold">
                프로필
              </Link>
              <Link to="/test" className="text-red-500 font-semibold">
                테스트
              </Link>
              <Link to="/results" className="text-red-500 font-semibold">
                결과 보기
              </Link>
              <button
                className="inline-block bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-400 transition mb-4 hover:text-white"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-center text-1xl font-bold tracking-tight text-red-500"
            >
              로그인
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
