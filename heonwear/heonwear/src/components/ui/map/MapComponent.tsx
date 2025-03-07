import React, { useEffect, useRef } from "react";

const MapComponent: React.FC = () => {
  // 지도 객체를 저장할 ref
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    // window.naver가 존재하는지 확인 (네이버 지도 스크립트가 로드되었는지)
    if (!window.naver) return;

    // 지도 생성
    const map = new window.naver.maps.Map("map", {
      center: new window.naver.maps.LatLng(37.5665, 126.978), // 서울 좌표
      zoom: 14,
    });

    // mapRef에 지도 객체 저장
    mapRef.current = map;
  }, []);

  // "내 위치" 버튼 클릭 핸들러
  const handleClickMyLocation = () => {
    if (!mapRef.current) return; // 지도 객체가 없으면 실행 X

    // Geolocation API로 현재 위치 얻기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // 네이버 지도 객체의 setCenter 메서드로 지도 중심 이동
          const newCenter = new window.naver.maps.LatLng(latitude, longitude);
          mapRef.current?.setCenter(newCenter);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          alert(`위치를 불러올 수 없습니다. 에러 코드: ${error.code}`);
        }
      );
    } else {
      alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mx-auto">
      {/* 실제 지도 영역 */}
      <div id="map" className="w-full h-full" />

      {/* 내 위치 버튼 */}
      <button
        onClick={handleClickMyLocation}
        className="
          absolute 
          left-4 
          bottom-4 
          flex 
          items-center 
          justify-center 
          w-12 
          h-12 
          rounded-full 
          bg-white 
          shadow-md 
          hover:bg-gray-100 
          active:scale-95 
          transition
        "
      >
        {/* 원하는 아이콘을 삽입할 수 있습니다 (SVG, 이미지 등) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c.63 0 1.25.11 1.83.32l4.61-4.61 1.41 1.41-4.61 4.61c.21.58.32 1.2.32 1.83s-.11 1.25-.32 1.83l4.61 4.61-1.41 1.41-4.61-4.61c-.58.21-1.2.32-1.83.32s-1.25-.11-1.83-.32l-4.61 4.61-1.41-1.41 4.61-4.61c-.21-.58-.32-1.2-.32-1.83s.11-1.25.32-1.83L5.16 8.13l1.41-1.41 4.61 4.61c.58-.21 1.2-.32 1.83-.32z"
          />
        </svg>
      </button>
    </div>
  );
};

export default MapComponent;
