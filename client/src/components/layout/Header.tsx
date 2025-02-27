import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-[1200px] h-[100px] mx-auto p-4 flex justify-between items-center bg-white ">
    <h1 className="text-xl font-bold">헌옷이</h1>
    <nav className="hidden md:flex space-x-4">
      <a href="#">수거함정보</a>
      <a href="#">옷장터</a>
      <a href="#">커뮤니티</a>
      <a href="#">이용문의</a>
    </nav>
    {/* 모바일 햄버거 메뉴 */}
    <button className="md:hidden p-2">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </header>
  );
};

export default Header;


