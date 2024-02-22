import React from "react";
import { arr3 } from "./Banner04Data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";
import "./../slider/mainslider.css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

const Banner04 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center text-xl font-semibold">
        BEWAKOOF ORIGINALS
      </div>
      <div>
        <div>
          <div>
            <Swiper
              slidesPerView={4}
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
              {arr3.map((data, i) => {
                return (
                  <SwiperSlide style={{ height: "350px" }} key={i}>
                    <img src={data.url} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner04;
