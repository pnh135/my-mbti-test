import { useContext, useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(token);
        setUser(userProfile);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      setUser((prev) => ({ ...prev, nickname: nickname }));
      await updateProfile({ nickname }, token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <div>
          <h1 className="text-3xl font-bold text-primary-color mb-6">
            프로필 정보
          </h1>
          <label className="text-2xl font-bold text-primary-color mb-6">
            아이디
          </label>
          <br />
          <span className="">{user?.id}</span>
          <br />
          <label className="text-2xl font-bold text-primary-color mb-6">
            닉네임
          </label>
          <br />
          <span>{user?.nickname}</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-1xl font-bold text-primary-color mb-6">
            프로필 수정
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <div>
              <label>닉네임</label>
              <input
                onChange={handleNicknameChange}
                value={nickname}
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-secondary-color transition duration-300 hover:text-[#FF5A5F]"
            >
              프로필 업데이트
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
