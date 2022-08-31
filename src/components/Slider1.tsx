import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider1.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={"88.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"2.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"3.jpg"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={"88.jpg"} alt="" /></SwiperSlide>
    
      </Swiper>
    </>
  );
}