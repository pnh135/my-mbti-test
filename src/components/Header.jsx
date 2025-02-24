import React, { useContext } from "react";
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
          className="text-center text-1xl font-bold tracking-tight text-gray-900"
        >
          홈
        </Link>
      </h1>
      <nav>
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-center text-1xl font-bold tracking-tight text-gray-900"
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
