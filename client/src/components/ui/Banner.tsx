import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
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
            style={{ borderRadius: '10px', overflow: 'hidden' }}
        >
        <SwiperSlide>
            <img style={{width:'100%', height:'100%'}} src="/banner/image1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:'100%', height:'100%'}} src="/banner/image1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> 
            <img style={{width:'100%', height:'100%'}} src="/banner/image1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      ); 
};

export default Banner;
