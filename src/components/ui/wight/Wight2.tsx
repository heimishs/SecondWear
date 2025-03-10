"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";

// 리폼 파트너 데이터 (추후 API에서 가져올 수도 있음)
const partners = [
  {
    id: 1,
    name: "메이튼",
    image: "/demo/image3.jpg",
    description: "어떤 옷이든 깔끔하고 트렌디하게 리폼 해드립니다",
  },
  {
    id: 2,
    name: "리폼스튜디오",
    image: "/demo/image3.jpg",
    description: "빈티지 의류 리폼 전문 공방입니다",
  },
  {
    id: 3,
    name: "수선의 달인",
    image: "/demo/image3.jpg",
    description: "수선과 리폼을 동시에! 맞춤 서비스 제공",
  },
];

const Wight2: React.FC = () => {
  return (
    <div className="mt-20">
      {/* 상단 타이틀 영역 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">✂️ 리폼 파트너</h2>
          <p className="text-gray-500 text-md">
            내 위치와 가까운 리폼 전문점을 찾아보세요!
          </p>
        </div>

        <button className="text-gray-400 text-md hover:text-gray-600">
          더 보기
        </button>
      </div>

      {/* 반응형 레이아웃: 모바일 1개 → 태블릿 2개 → PC 3개 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {partners.map((partner) => (
          <div key={partner.id} className="w-full bg-white rounded-lg shadow-md p-5">
            {/* 이미지 */}
            <Image
              src={partner.image}
              width={500}
              height={300}
              alt={partner.name}
              className="w-full rounded-lg object-cover"
            />

            {/* 정보 */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold">{partner.name}</h3>
              <p className="text-gray-700 text-sm mt-2">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wight2;
