import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SliderSugg.css";

const SliderSugg = () => {
  return (
    <div className="SliderPish">
      <h3>پیشنهاد دیجی کالا</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="Slides">
            <div className="img100">
              <img src={"3.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
            <div className="img101">
              <img src={"2.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slides">
            <div className="img100">
              <img src={"3.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
            <div className="img101">
              <img src={"2.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slides">
            <div className="img100">
              <img src={"3.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
            <div className="img101">
              <img src={"2.jpg"} alt="" className="img2" />
              <h6>sdasdsas</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slides">
            <div className="img100">
              <img src={"3.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
            <div className="img101">
              <img src={"2.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slides">
            <div className="img100">
              <img src={"3.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
            <div className="img101">
              <img src={"2.jpg"} alt="" className="img2" />
              <h6>dfdddff</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSugg;
