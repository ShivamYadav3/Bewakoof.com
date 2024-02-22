import React from "react";

import { arr5 } from "./Banner04Data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";
import "./../slider/mainslider.css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

const Banner06 = () => {
  return (
    <div>
      <div>
        <div>
          <Swiper
            slidesPerView={2.8}
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
            {arr5.map((data, i) => {
              return (
                <SwiperSlide style={{ height: "530px" }} key={i}>
                  <img src={data.url} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner06;
