import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-[1200px] h-[80px] mx-auto px-6 flex justify-between items-center bg-white relative">
      {/* 로고 */}
      <h1 className="text-2xl font-bold">헌옷이</h1>

      {/* PC 내비게이션 메뉴 (태블릿 이하에서는 숨김) */}
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#" className="hover:text-gray-600">수거함정보</a></li>
          <li><a href="#" className="hover:text-gray-600">옷장터</a></li>
          <li><a href="#" className="hover:text-gray-600">커뮤니티</a></li>
          <li><a href="#" className="hover:text-gray-600">이용문의</a></li>
          <li className="ml-4"><a href="#" className="hover:text-gray-600">로그인</a></li>
          <li><a href="#" className="hover:text-gray-600">회원가입</a></li>
        </ul>
      </nav>

      {/* 모바일용 알림 + 메뉴 버튼 */}
      <div className="flex items-center space-x-4 md:hidden">
        {/* 알림 아이콘 */}
        <div className="relative">
          <img src="/demo/Bell.png" className="w-6 h-6" />
          {/* 빨간 알림 배지 */}
          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
        </div>

        {/* 햄버거 메뉴 버튼 */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="/demo/nav-menu.png" className="w-6 h-6" />
        </button>
      </div>

      {/* 모바일 메뉴 (햄버거 버튼 클릭 시 표시) */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md p-5 flex flex-col items-center md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li><a href="#" className="hover:text-gray-600">수거함정보</a></li>
            <li><a href="#" className="hover:text-gray-600">옷장터</a></li>
            <li><a href="#" className="hover:text-gray-600">커뮤니티</a></li>
            <li><a href="#" className="hover:text-gray-600">이용문의</a></li>
            <li><a href="#" className="hover:text-gray-600">로그인</a></li>
            <li><a href="#" className="hover:text-gray-600">회원가입</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
