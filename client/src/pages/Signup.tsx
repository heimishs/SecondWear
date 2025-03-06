import { useState } from "react";

function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [region, setRegion] = useState("");
  const [usageType, setUsageType] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* 아이디 입력 */}
        <label className="text-gray-500 font-bold text-sm">아이디</label>
        <div className="flex items-center space-x-2 mb-3">
          <input
            type="text"
            placeholder="아이디"
            className="w-full p-3 border rounded-lg bg-gray-200 text-gray-500"
          />
          <button className="bg-[#E0E97D] text-[#757944] font-bold px-4 h-[46px] rounded-lg whitespace-nowrap">
            중복확인
          </button>
        </div>

        <p className="text-gray-400 text-xs mb-4">
          3~15자 영문/숫자 조합으로 입력
        </p>

        {/* 비밀번호 입력 */}
        <label className="text-gray-500 font-bold text-sm">비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg bg-gray-200 text-gray-500"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg bg-gray-200 text-gray-500"
        />
        <p className="text-gray-400 text-xs mb-4">
          8~16자 영문/숫자/특수문자를 조합하여 입력
        </p>

        {/* 이메일 입력 */}
        <label className="text-gray-500 font-bold text-sm">이메일</label>
        <div className="flex items-center space-x-2 mb-3">
          <input
            type="email"
            placeholder="이메일"
            className="w-full p-3 border rounded-lg bg-gray-200 text-gray-500"
          />
          <button className="bg-[#E0E97D] text-[#757944] font-bold px-4 h-[46px] rounded-lg whitespace-nowrap">
            인증
          </button>
        </div>

        {/* 인증번호 입력 */}
        <label className="text-gray-500 font-bold text-sm">인증번호</label>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="인증번호"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-200 text-gray-500"
          />
          <span className="ml-2 text-[#757944] font-bold">04:59</span>
        </div>

        {/* 지역 설정 */}
        <label className="text-gray-500 font-bold text-sm">지역 설정</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg bg-gray-200 text-gray-500"
        >
          <option>선택</option>
        </select>

        {/* 이용 형태 */}
        <label className="text-gray-500 font-bold text-sm">이용 형태</label>
        <select
          value={usageType}
          onChange={(e) => setUsageType(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg bg-gray-200 text-gray-500"
        >
          <option>선택</option>
        </select>

        {/* 등록 버튼 */}
        <button className="w-full p-3 bg-[#E0E97D] text-[#757944] font-bold rounded-lg">
          등록
        </button>
      </div>
    </div>
  );
}

export default Signup;
