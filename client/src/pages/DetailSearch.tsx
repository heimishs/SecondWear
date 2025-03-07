import React, { useEffect, useRef, useState } from "react";
import MapComponent from "../components/ui/MapComponent";
import { Link } from "react-router-dom";

// 더미 데이터 (15개)
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
    cycle: "둘째 주 화요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 6,
    title: "상월곡동 24-196 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 월요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 7,
    title: "상월곡동 24-197 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 수요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 8,
    title: "상월곡동 24-198 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "넷째 주 목요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 9,
    title: "상월곡동 24-199 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 화요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 10,
    title: "상월곡동 24-200 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 월요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 11,
    title: "상월곡동 24-201 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 수요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 12,
    title: "상월곡동 24-202 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "넷째 주 목요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 13,
    title: "상월곡동 24-203 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "둘째 주 화요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 14,
    title: "상월곡동 24-204 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "첫째 주 월요일",
    items: "의류, 신발, 가방, 담요 등",
  },
  {
    id: 15,
    title: "상월곡동 24-205 현옷수거함",
    image: "/demo/image2.jpg",
    cycle: "셋째 주 수요일",
    items: "의류, 신발, 가방, 담요 등",
  },
];

// 예시용 도시 목록 API 받아오게끔 변경해야함
const cityList = [
  "서울시 중구",
  "서울시 성북구",
  "서울시 강동구",
  "서울시 강남구",
  "서울시 광진구",
  "부산시 해운대구",
  "부산시 사하구",
  "대구시 수성구",
  "인천시 남동구",
];

function DetailSearch() {
  // 무한 스크롤 관련 상태
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const displayedLocations = locations.slice(0, visibleCount);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // 자동완성(검색) 관련 상태
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // 검색어가 바뀔 때마다 cityList에서 필터링
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // 검색어가 없으면 목록을 비움
      setSuggestions([]);
    } else {
      // 검색어가 포함된 도시만 필터링
      const filtered = cityList.filter((city) =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm]);

  // 무한 스크롤 Intersection Observer
  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (visibleCount >= locations.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (isLoading) return;
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [visibleCount, isLoading]);

  // 자동완성 항목 클릭 시
  const handleSuggestionClick = (city: string) => {
    setSearchTerm(city); // 클릭한 항목으로 검색창 값 변경
    setSuggestions([]); // 목록 닫기
  };

  return (
    <div className="flex flex-col items-center p-5">
      {/* 지도 영역 */}
      <div className="w-full max-w-[1200px] h-[400px] md:h-[600px] mx-auto relative overflow-hidden rounded-lg lg:shadow-none shadow-inner lg:after:content-none after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] after:pointer-events-none">
        <MapComponent />

        {/* PC용 검색 바 */}
        <div className="hidden lg:flex flex-col absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg w-[400px]">
          {/* 검색 인풋 */}
          <div className="relative">
            <input
              type="text"
              placeholder="우리 동네를 검색해보세요"
              className="border-none focus:outline-none flex-grow p-2 text-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="ml-2 p-2 text-white rounded-md absolute right-2 top-1/2 transform -translate-y-1/2">
              <img src="/demo/searchicon.png" alt="검색" className="w-5 h-5" />
            </button>
          </div>

          {/* 자동완성 목록 */}
          {suggestions.length > 0 && (
            <ul className="bg-white border border-gray-200 rounded-lg shadow mt-1 max-h-48 overflow-y-auto">
              {suggestions.map((city) => (
                <li
                  key={city}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 모바일 + 태블릿용 검색 바 */}
        <div className="flex lg:hidden flex-col absolute top-4 left-4 right-4 bg-white p-3 rounded-lg shadow-md">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="성북구 현옷수거함"
              className="border-none focus:outline-none flex-grow p-2 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="ml-2 p-2 text-white rounded-md absolute right-2 top-1/2 transform -translate-y-1/2">
              <img src="/demo/searchicon.png" alt="검색" className="w-5 h-5" />
            </button>
          </div>

          {/* 자동완성 목록 */}
          {suggestions.length > 0 && (
            <ul className="bg-white border border-gray-200 rounded-lg shadow mt-1 max-h-48 overflow-y-auto">
              {suggestions.map((city) => (
                <li
                  key={city}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="w-full max-w-[1200px] bg-white rounded-t-lg mt-10">
        <div className="flex space-x-4 mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-300">
            거리
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-300">
            북마크
          </button>
        </div>

        <Link to="/DetailInfo" className="hover:text-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-0 md:mt-50">
            {displayedLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={location.image}
                  className="w-full h-48 object-cover"
                  alt={location.title}
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
