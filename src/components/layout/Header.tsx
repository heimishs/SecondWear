"use client"; // 클라이언트 컴포넌트 선언

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-[1200px] h-[80px] mx-auto px-6 flex justify-between items-center bg-white relative">
      <Link href="/" className="text-2xl font-bold">
        헌옷이
      </Link>

      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link href="/search" className="hover:text-gray-600">
              수거함정보
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              옷장터
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              커뮤니티
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              이용문의
            </a>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-600 ml-10 font-bold">
              로그인
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-gray-600 font-bold">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4 md:hidden">
        <div className="relative">
          <Image src="/demo/Bell.png" width={24} height={24} alt="알림" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src="/demo/nav-menu.png" width={24} height={24} alt="메뉴" />
        </button>
      </div>

      {/* 모바일 메뉴 (햄버거 버튼 클릭 시 표시) */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md p-5 flex flex-col items-center md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <Link href="/Search" className="hover:text-gray-600">
                수거함정보
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                옷장터
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                커뮤니티
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                이용문의
              </a>
            </li>
            <li>
              <Link href="/login" className="hover:text-gray-600">
                로그인
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-gray-600">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
