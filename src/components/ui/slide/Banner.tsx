"use client"; // 클라이언트 컴포넌트 선언

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
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
      className="h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
      modules={[Autoplay, Pagination]} // 모듈 추가 (마지막에 배치)
    >
      <SwiperSlide>
        <Image
          className="w-full h-full object-cover"
          src="/demo/image1.jpg"
          alt="배너 이미지 1"
          width={1200}
          height={500}
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full h-full object-cover"
          src="/demo/image1.jpg"
          alt="배너 이미지 2"
          width={1200}
          height={500}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full h-full object-cover"
          src="/demo/image1.jpg"
          alt="배너 이미지 3"
          width={1200}
          height={500}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
