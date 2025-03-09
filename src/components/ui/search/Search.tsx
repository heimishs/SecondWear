"use client"; // 클라이언트 컴포넌트 선언

import React from "react";
import Image from "next/image";

const Search: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] h-[100px] mx-auto flex justify-center items-center">
      <span className="hidden md:inline">우리동네를 검색해보세요</span>
      {/* 검색창 */}
      <div className="relative w-[400px]">
        <input
          className="bg-[#E9E9E9] w-[400px] h-[50px] rounded-full m-5 p-5 placeholder-gray-900"
          type="text"
          name="search"
          placeholder="서울시 중구 헌옷수거함"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <Image src="/demo/searchicon.png" width={24} height={24} alt="검색" />
        </button>
      </div>
    </div>
  );
};

export default Search;
