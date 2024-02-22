import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";
import "./mainslider.css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

import one from "./../../assets/img/AmolParashar.webp";
import two from "./../../assets/img/Joggers.webp";

const MainSlider = () => {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/1x1--2--1707916056.gif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/HC-1X1--1708330944.gif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/1x1-Banner-Oversized-Graphic-Printed-T-Shirts-Common--2--1708320870.gif"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img src={two} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainSlider;
