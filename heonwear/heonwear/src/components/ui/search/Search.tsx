import React from "react";
import "swiper/css";

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
          placeholder="'서울시 중구 헌옷수거함'"
        />
        <a href="#">
          <img
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            src="/demo/searchicon.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Search;
