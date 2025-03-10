"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";

// 거래 아이템 목록
const items = [
  {
    id: 1,
    title: "헌옷 고등학교 남자 교복 나눔함",
    price: "나눔",
    time: "1시간 전",
    img: "/demo/image4.jpg",
    tags: ["거래중", "나눔"],
  },
  {
    id: 2,
    title: "쿠쿠 10L 에어프라이어",
    price: "37,000원",
    time: "1시간 전",
    img: "/demo/image4.jpg",
    tags: ["거래중"],
  },
  {
    id: 3,
    title: "쿠쿠 10L 에어프라이어",
    price: "37,000원",
    time: "1시간 전",
    img: "/demo/image4.jpg",
    tags: ["거래중"],
  },
  {
    id: 4,
    title: "갈색 체크 무늬 긴팔 남방",
    price: "7,000원",
    time: "1시간 전",
    img: "/demo/image4.jpg",
    tags: ["거래중"],
  },
];

const Wight3: React.FC = () => {
  return (
    <div className="mt-20">
      {/* 상단 타이틀 영역 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">👕 의류 거래</h2>
          <p className="text-gray-500 text-md">
            다양한 의류 거래 상품을 확인하세요!
          </p>
        </div>

        <button className="text-gray-400 text-md hover:text-gray-600">
          더 보기
        </button>
      </div>

      {/* 반응형 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {items.map((item) => (
          <div key={item.id} className="flex bg-white rounded-lg p-3 shadow-md">
            {/* 이미지 */}
            <Image
              src={item.img}
              width={96} // w-24 (24 * 4px)
              height={96} // h-24 (24 * 4px)
              alt={item.title}
              className="rounded-md object-cover"
            />

            {/* 내용 */}
            <div className="ml-3 flex-1">
              {/* 태그 */}
              <div className="flex gap-1 mb-1">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 제목 */}
              <h3 className="text-sm font-semibold truncate w-40">
                {item.title}
              </h3>

              {/* 가격 or 나눔 */}
              <p className="text-md font-bold">{item.price}</p>
            </div>

            {/* 시간 */}
            <p className="text-xs text-gray-400 whitespace-nowrap">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wight3;
