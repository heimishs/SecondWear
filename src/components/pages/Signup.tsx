import { useState } from "react";

function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [region, setRegion] = useState("");
  const [usageType, setUsageType] = useState("");

  const [isIdChecked, setIsIdChecked] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // 아이디 중복 확인 (예제)
  const checkId = () => {
    if (id.length >= 3) {
      alert("사용 가능한 아이디입니다.");
      setIsIdChecked(true);
    } else {
      alert("아이디는 최소 3자 이상이어야 합니다.");
    }
  };

  // 이메일 인증 요청 (예제)
  const sendVerificationCode = () => {
    if (email.includes("@")) {
      alert("인증번호를 전송했습니다.");
      setIsEmailVerified(true);
    } else {
      alert("올바른 이메일을 입력해주세요.");
    }
  };

  // 비밀번호 확인 검증
  const isPasswordValid = password.length >= 8 && password === confirmPassword;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* 아이디 입력 */}
        <label htmlFor="id" className="text-gray-500 font-bold text-sm">
          아이디
        </label>
        <div className="flex items-center space-x-2 mb-3">
          <input
            id="id"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#E0E97D]"
          />
          <button
            onClick={checkId}
            className="bg-[#E0E97D] text-[#757944] font-bold px-4 h-[46px] rounded-lg whitespace-nowrap"
          >
            중복확인
          </button>
        </div>
        <p className="text-gray-400 text-xs mb-4">
          3~15자 영문/숫자 조합으로 입력
        </p>

        {/* 비밀번호 입력 */}
        <label htmlFor="password" className="text-gray-500 font-bold text-sm">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#E0E97D]"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full p-3 mb-4 border rounded-lg ${
            isPasswordValid
              ? "bg-gray-100 text-gray-700"
              : "bg-red-100 text-red-500"
          } focus:ring-2 focus:ring-[#E0E97D]`}
        />
        <p className="text-gray-400 text-xs mb-4">
          8~16자 영문/숫자/특수문자를 조합하여 입력
        </p>

        {/* 이메일 입력 */}
        <label htmlFor="email" className="text-gray-500 font-bold text-sm">
          이메일
        </label>
        <div className="flex items-center space-x-2 mb-3">
          <input
            id="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#E0E97D]"
          />
          <button
            onClick={sendVerificationCode}
            className="bg-[#E0E97D] text-[#757944] font-bold px-4 h-[46px] rounded-lg whitespace-nowrap"
          >
            인증
          </button>
        </div>

        {/* 인증번호 입력 */}
        <label
          htmlFor="verificationCode"
          className="text-gray-500 font-bold text-sm"
        >
          인증번호
        </label>
        <div className="flex items-center mb-4">
          <input
            id="verificationCode"
            type="text"
            placeholder="인증번호"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#E0E97D]"
          />
          <span className="ml-2 text-[#757944] font-bold">04:59</span>
        </div>

        {/* 지역 설정 */}
        <label htmlFor="region" className="text-gray-500 font-bold text-sm">
          지역 설정
        </label>
        <select
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#E0E97D]"
        >
          <option value="">선택</option>
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
        </select>

        {/* 이용 형태 */}
        <label htmlFor="usageType" className="text-gray-500 font-bold text-sm">
          이용 형태
        </label>
        <select
          id="usageType"
          value={usageType}
          onChange={(e) => setUsageType(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-[#E0E97D]"
        >
          <option value="">선택</option>
          <option value="개인">개인</option>
          <option value="기업">기업</option>
        </select>

        {/* 등록 버튼 */}
        <button
          disabled={
            !id ||
            !isIdChecked ||
            !isPasswordValid ||
            !email ||
            !isEmailVerified ||
            !region ||
            !usageType
          }
          className={`w-full p-3 font-bold rounded-lg transition ${
            id &&
            isIdChecked &&
            isPasswordValid &&
            email &&
            isEmailVerified &&
            region &&
            usageType
              ? "bg-[#E0E97D] text-[#757944] hover:bg-[#d9e367]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default Signup;
