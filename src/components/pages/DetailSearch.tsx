"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// MapComponent를 SSR에서 제외
const MapComponent = dynamic(() => import("@/components/ui/map/MapComponent"), {
  ssr: false,
});

// 더미 데이터 (수거함 위치 목록)
const locations = [
  {
    id: 1,
    title: "상월곡동 24-191 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 화요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 2,
    title: "상월곡동 24-192 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 월요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 3,
    title: "상월곡동 24-193 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 수요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 4,
    title: "상월곡동 24-194 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "넷째 주 목요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 5,
    title: "상월곡동 24-195 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 금요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 6,
    title: "상월곡동 24-196 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 월요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 7,
    title: "상월곡동 24-197 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 화요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 8,
    title: "상월곡동 24-198 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "넷째 주 수요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 9,
    title: "상월곡동 24-199 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 목요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 10,
    title: "상월곡동 24-200 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 금요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 11,
    title: "상월곡동 24-201 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 월요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 12,
    title: "상월곡동 24-202 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "넷째 주 화요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 13,
    title: "상월곡동 24-203 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 수요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 14,
    title: "상월곡동 24-204 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 목요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 15,
    title: "상월곡동 24-205 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 금요일",
    items: "의류, 신발, 가방, 담요 등",
  },
];

const cityList = [
  "서울시 중구",
  "서울시 성북구",
  "서울시 강동구",
  "서울시 강남구",
  "서울시 광진구",
];

function DetailSearch() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // 검색 자동완성
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(
        cityList.filter((city) =>
          city.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  // 무한 스크롤 로드 함수
  const loadMore = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 1500);
  };

  // IntersectionObserver를 통한 무한 스크롤
  useEffect(() => {
    if (visibleCount >= locations.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [visibleCount, isLoading]);

  return (
    <div className="flex flex-col items-center p-5 w-full max-w-[1200px]">
      {/* 지도 영역 */}
      <div className="w-full max-w-[1200px] h-[400px] md:h-[600px] mx-auto relative  rounded-lg shadow-inner">
        <MapComponent />

        {/* 검색 바 (PC) */}
        <div className="hidden lg:flex flex-col absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg w-[400px]">
        <div className="relative">
          <input
            type="text"
            placeholder="우리 동네를 검색해보세요"
            className="border-none focus:outline-none flex-grow p-2 text-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

         {/* 자동완성 목록 표시 */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-white border rounded-lg shadow-lg mt-1 z-50">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(suggestion); // 입력란 업데이트
                    setSuggestions([]); // 자동완성 목록 숨기기
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

        </div>
        </div>
      </div>

      {/* 수거함 목록 */}
      <div className="w-full max-w-[1200px] bg-white rounded-t-lg mt-10">
        <div className="flex space-x-4 mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">
            거리
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">
            북마크
          </button>
        </div>

        <Link href="/detail" className="hover:text-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, visibleCount).map((location) => (
              <div
                key={location.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={location.image}
                  width={500}
                  height={300}
                  alt={location.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="font-bold text-lg">{location.title}</p>
                  <p className="text-sm text-gray-500">
                    🗓️ 수거 주기: {location.cycle}
                  </p>
                  <p className="text-sm text-gray-500">
                    🛍️ 수거 가능 품목: {location.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Link>

        {isLoading && (
          <div className="py-4 text-center text-gray-500 font-semibold">
            로딩중...
          </div>
        )}

        {visibleCount < locations.length && (
          <div ref={sentinelRef} className="py-4 text-center text-gray-400">
            스크롤하면 더 불러옵니다...
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailSearch;
