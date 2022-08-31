import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./Slider2.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <div className="Cont">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="card-box1">
            <h4>پیشنهاد شگفت انگیز</h4>
            <img src={"88.jpg"} alt="" className="img2" />
            <h3>مشاهده همه </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card-box3">
            <img src={"2.jpg"} alt="" className="img2" />
            <div className="titr">
              <div className="discount">20%</div>
              <div className="price">45000تومان </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card-box3">
            <img src={"2.jpg"} alt="" className="img2" />
            <div className="titr">
              <div className="discount">20%</div>
              <div className="price">45000تومان </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card-box3">
            <img src={"2.jpg"} alt="" className="img2" />
            <div className="titr">
              <div className="discount">20%</div>
              <div className="price">45000تومان </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card-box3">
            <img src={"2.jpg"} alt="" className="img2" />
            <div className="titr">
              <div className="discount">20%</div>
              <div className="price">45000تومان </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card-box3">
            <img src={"2.jpg"} alt="" className="img2" />
            <div className="titr">
              <div className="discount">20%</div>
              <div className="price">45000تومان </div>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
