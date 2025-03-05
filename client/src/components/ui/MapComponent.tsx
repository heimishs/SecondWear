import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // 네이버 지도 객체가 로드되었는지 확인
    if (!window.naver) return;

    const map = new window.naver.maps.Map("map", {
      center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울 좌표
      zoom: 14,
    });
  }, []);

  return <div id="map" className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg " />;
};

export default MapComponent;