import React from "react";
import "swiper/css";

const Wight: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-4">
        {/* 왼쪽: 제목 + 설명 */}
        <div>
          <h2 className="text-2xl font-semibold">🧥나와 가까운 헌옷수거함</h2>
          <p className="text-gray-500 text-md">
            내 위치와 가까운 헌옷수거함을 보여드려요!
          </p>
        </div>

        {/* 오른쪽: 더 보기 버튼 */}
        <button className="text-gray-400 text-md hover:text-gray-600">
          더 보기
        </button>
      </div>

      {/* 반응형 레이아웃 적용: 모바일 1개 → 태블릿 3개 → 데스크톱 4개로 나오게끔 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        <div className="w-full bg-white rounded-lg shadow-md">
          {/* 상단부: 아이콘(이미지) + 제목 */}
          <img className="w-full rounded-t-lg" src="/demo/image2.jpg" alt="" />
          <div className="p-5">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-semibold">
                상월곡동 24-191 헌옷수거함
              </h3>
            </div>

            {/* 수거 주기 / 수거 가능 품목 등 텍스트 영역 */}
            <div className="text-gray-700 text-sm">
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 주기:</span>
                <span className="ml-1">둘째 주 화요일</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 가능 품목:</span>
                <span className="ml-1">의류, 신발, 가방 등..</span>
              </div>
            </div>

            {/* 상세 보기 버튼 */}
            <button className="w-full mt-4 px-4 py-2 bg-[#E0E97D] text-[#757944] rounded-md hover:bg-[#D5DE6D]">
              상세 보기
            </button>
          </div>
        </div>

        <div className="w-full bg-white rounded-lg shadow-md">
          {/* 상단부: 아이콘(이미지) + 제목 */}
          <img className="w-full rounded-t-lg" src="/demo/image2.jpg" alt="" />
          <div className="p-5">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-semibold">
                상월곡동 24-191 헌옷수거함
              </h3>
            </div>

            {/* 수거 주기 / 수거 가능 품목 등 텍스트 영역 */}
            <div className="text-gray-700 text-sm">
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 주기:</span>
                <span className="ml-1">둘째 주 화요일</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 가능 품목:</span>
                <span className="ml-1">의류, 신발, 가방 등..</span>
              </div>
            </div>

            {/* 상세 보기 버튼 */}
            <button className="w-full mt-4 px-4 py-2 bg-[#E0E97D] text-[#757944] rounded-md hover:bg-[#D5DE6D]">
              상세 보기
            </button>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md">
          {/* 상단부: 아이콘(이미지) + 제목 */}
          <img className="w-full rounded-t-lg" src="/demo/image2.jpg" alt="" />
          <div className="p-5">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-semibold">
                상월곡동 24-191 헌옷수거함
              </h3>
            </div>

            {/* 수거 주기 / 수거 가능 품목 등 텍스트 영역 */}
            <div className="text-gray-700 text-sm">
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 주기:</span>
                <span className="ml-1">둘째 주 화요일</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 가능 품목:</span>
                <span className="ml-1">의류, 신발, 가방 등..</span>
              </div>
            </div>

            {/* 상세 보기 버튼 */}
            <button className="w-full mt-4 px-4 py-2 bg-[#E0E97D] text-[#757944] rounded-md hover:bg-[#D5DE6D]">
              상세 보기
            </button>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md">
          {/* 상단부: 아이콘(이미지) + 제목 */}
          <img className="w-full rounded-t-lg" src="/demo/image2.jpg" alt="" />
          <div className="p-5">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-semibold">
                상월곡동 24-191 헌옷수거함
              </h3>
            </div>

            {/* 수거 주기 / 수거 가능 품목 등 텍스트 영역 */}
            <div className="text-gray-700 text-sm">
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 주기:</span>
                <span className="ml-1">둘째 주 화요일</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="font-medium">수거 가능 품목:</span>
                <span className="ml-1">의류, 신발, 가방 등..</span>
              </div>
            </div>

            {/* 상세 보기 버튼 */}
            <button className="w-full mt-4 px-4 py-2 bg-[#E0E97D] text-[#757944] rounded-md hover:bg-[#D5DE6D]">
              상세 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wight;
