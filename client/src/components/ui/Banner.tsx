import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

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
      className="h-[300px] md:h-[400px] lg:h-[500px]" // 모바일: 400px, 태블릿: 500px (md 기준)
      style={{ borderRadius: "10px", overflow: "hidden" }}
    >
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="/banner/image1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="/banner/image1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="/banner/image1.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
