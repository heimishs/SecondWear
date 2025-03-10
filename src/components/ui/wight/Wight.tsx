"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";

// 헌옷수거함 데이터
const locations = [
  {
    id: 1,
    title: "상월곡동 24-191 헌옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 화요일",
    items: "의류, 신발, 가방 등..",
  },
  {
    id: 2,
    title: "상월곡동 24-192 헌옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 월요일",
    items: "의류, 신발, 가방 등..",
  },
  {
    id: 3,
    title: "상월곡동 24-193 헌옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 수요일",
    items: "의류, 신발, 가방 등..",
  },
  {
    id: 4,
    title: "상월곡동 24-194 헌옷수거함",
    image: "/demo/image2.jpg",
    cycle: "넷째 주 목요일",
    items: "의류, 신발, 가방 등..",
  },
];

const Wight: React.FC = () => {
  return (
    <div className="mt-20">
      {/* 상단 타이틀 영역 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">🧥 나와 가까운 헌옷수거함</h2>
          <p className="text-gray-500 text-md">
            내 위치와 가까운 헌옷수거함을 보여드려요!
          </p>
        </div>

        <button className="text-gray-400 text-md hover:text-gray-600">
          더 보기
        </button>
      </div>

      {/* 반응형 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {locations.map((location) => (
          <div key={location.id} className="w-full bg-white rounded-lg shadow-md">
            {/* 이미지 부분 */}
            <Image
              src={location.image}
              width={500}
              height={300}
              alt={location.title}
              className="w-full rounded-t-lg object-cover"
            />
            
            {/* 정보 영역 */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-3">{location.title}</h3>
              
              <div className="text-gray-700 text-sm">
                <p className="mb-1">
                  <span className="font-medium">수거 주기:</span> {location.cycle}
                </p>
                <p>
                  <span className="font-medium">수거 가능 품목:</span> {location.items}
                </p>
              </div>

              {/* 상세 보기 버튼 */}
              <button className="w-full mt-4 px-4 py-2 bg-[#E0E97D] text-[#757944] rounded-md hover:bg-[#D5DE6D]">
                상세 보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wight;
