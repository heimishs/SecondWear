/// <reference types="@types/navermaps" />
"use client";

import React, { useEffect, useRef, useState } from "react";

const NAVER_MAP_CLIENT_ID = "0d3c18w7fb"; // 네이버 API Key 입력

type NaverMap = naver.maps.Map | null; // 정상적으로 인식됨

const MapComponent: React.FC = () => {
  const mapRef = useRef<NaverMap>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadNaverMap = () => {
      if (typeof window !== "undefined" && window.naver) {
        const map = new window.naver.maps.Map("map", {
          center: new window.naver.maps.LatLng(37.5665, 126.978),
          zoom: 14,
        });

        mapRef.current = map;
        setIsLoaded(true);
      }
    };

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.onload = loadNaverMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mx-auto">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600">
          네이버 지도 로딩 중...
        </div>
      )}
      <div id="map" className="w-full h-full" />
    </div>
  );
};

export default MapComponent;
