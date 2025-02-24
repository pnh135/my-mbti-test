import React, { useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  getUserProfile();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(e);
  };

  return (
    <div>
      <div>
        <h1>프로필 정보</h1>
        <label>아이디</label>
        <span>(아이디 들어갈 곳)</span>
        <label>닉네임</label>
        <span>(닉네임 들어갈 곳)</span>
      </div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
