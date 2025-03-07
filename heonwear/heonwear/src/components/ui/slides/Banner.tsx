"use client"; // ✅ Next.js 환경에서 Swiper 사용 시 필요

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      speed={1500}
      loop={true} // 무한 루프
      autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 슬라이드 (3초)
      pagination={{ clickable: true }} // 페이지네이션 활성화
      modules={[Autoplay, Pagination]} // 모듈 추가
      className="h-[300px] md:h-[400px] lg:h-[500px]" // 모바일: 300px, 태블릿: 400px, PC: 500px
      style={{ borderRadius: "10px", overflow: "hidden" }}
    >
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="/demo/image1.jpg"
          alt="배너 이미지 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="/demo/image1.jpg"
          alt="배너 이미지 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="/demo/image1.jpg"
          alt="배너 이미지 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
