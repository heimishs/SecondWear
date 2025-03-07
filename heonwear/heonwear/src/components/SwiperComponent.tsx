"use client";
import React from "react"; // ✅ React를 명시적으로 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperComponent() {
  return (
    <Swiper spaceBetween={10} slidesPerView={3}>
      <SwiperSlide><div className="p-4 bg-blue-500 text-white">Slide 1</div></SwiperSlide>
      <SwiperSlide><div className="p-4 bg-red-500 text-white">Slide 2</div></SwiperSlide>
      <SwiperSlide><div className="p-4 bg-green-500 text-white">Slide 3</div></SwiperSlide>
    </Swiper>
  );
}
