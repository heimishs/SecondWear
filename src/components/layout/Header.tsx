"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, [isLoggedIn]); // 🔥 로그인 상태 변경 시 실행

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/");
    window.location.reload(); // 🔥 전체 새로고침하여 반영
  };

  return (
    <header className="w-full max-w-[1200px] h-[80px] mx-auto px-6 flex justify-between items-center bg-white relative">
      <Link href="/" className="text-2xl font-bold">헌옷이</Link>

      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6 text-lg font-medium">
          <li><Link href="/search" className="hover:text-gray-600">수거함정보</Link></li>
          <li><Link href="/otstore" className="hover:text-gray-600">옷장터</Link></li>
          <li><Link href="/community" className="hover:text-gray-600">커뮤니티</Link></li>
          <li><Link href="/inquiry" className="hover:text-gray-600">이용문의</Link></li>

          {isLoggedIn ? (
            <>
              <li className="font-bold">{userId}</li>
              <li><Link href="/profile" className="hover:text-gray-600">회원정보</Link></li>
              <li>
                <button onClick={handleLogout} className="hover:text-gray-600 font-bold">로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li><Link href="/login" className="hover:text-gray-600 font-bold">로그인</Link></li>
              <li><Link href="/signup" className="hover:text-gray-600 font-bold">회원가입</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
