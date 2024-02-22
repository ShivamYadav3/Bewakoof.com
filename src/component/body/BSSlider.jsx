import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./../slider/mainslider.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { arr8 } from "./BestSellerData";
import Card from "./Card";

const BSSlider = () => {
  return (
    <div>
      <div>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            slidesPerGroup={5}
            className="mySwiper"
          >
            {arr8.map((data, i) => {
              return (
                <SwiperSlide style={{ height: "380px" }} key={i}>
                  <Card data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BSSlider;
