"use client"; // 클라이언트 컴포넌트 선언
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ API 응답 타입 정의
  interface LoginResponse {
    token: string;
    userId: number; // userId 추가
  }

  const handleLogin = async () => {
    setError(""); // 오류 초기화
    try {
      // axios.post<LoginResponse>()를 사용하여 타입 지정
      const { data } = await axios.post<LoginResponse>("/api/auth/login", { email, password });

      console.log(data);
      // ✅ JWT 토큰과 userId 저장
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId.toString()); // userId 저장

      alert("로그인 성공!");
      router.push("/"); // 로그인 후 이동
    } catch (err: any) {
      setError(err.response?.data?.error || "로그인 실패");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg w-96 shadow-md">
        <h2 className="text-lg font-bold">로그인하고</h2>
        <p className="text-lg font-bold mb-4">더 많은 기능을 이용해 보세요.</p>

        {error && <p className="text-red-500">{error}</p>}

        {/* 아이디 입력 */}
        <input
          type="text"
          aria-label="아이디 또는 이메일주소 입력"
          placeholder="아이디 또는 이메일주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E0E97D]"
        />

        {/* 비밀번호 입력 */}
        <input
          type="password"
          aria-label="비밀번호 입력"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E0E97D]"
        />

        {/* 자동 로그인 & 아이디 찾기 */}
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <label htmlFor="autoLogin" className="flex items-center cursor-pointer">
            <input id="autoLogin" type="checkbox" className="mr-2 cursor-pointer" />
            자동 로그인
          </label>
          <div>
            <span className="cursor-pointer hover:underline">아이디 찾기</span> |{" "}
            <span className="cursor-pointer hover:underline">비밀번호 찾기</span>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          onClick={handleLogin}
          disabled={!email || !password}
          className={`w-full p-3 font-bold rounded-lg transition ${
            email && password
              ? "bg-[#E0E97D] text-[#757944] hover:bg-[#d9e367]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          로그인
        </button>

        {/* 소셜 로그인 */}
        <div className="flex justify-center mt-4 space-x-4">
          <button className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center" aria-label="네이버 로그인">
            N
          </button>
          <button className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center" aria-label="카카오 로그인">
            K
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
