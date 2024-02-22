import React from "react";
import HeaderTop from "./headerTop";
import MainNav from "./MainNav";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="sticky top-0 z-30 bg-white">
      <HeaderTop />
      <Navbar />
      <MainNav />
    </div>
  );
};

export default Header;
// autoply

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination,Navigation,Autoplay } from "swiper/modules";
// import { SERVICESCOMPO } from "@/app/utils/constatnt/Constant";
// import "swiper/css/pagination";
// import "swiper/css";
// import "swiper/element/css/autoplay";

//  <Swiper
//           pagination={{ clickable: true }}
//           slidesPerView={1}
//           autoplay={{ delay: 3000 }}
//           modules={[Pagination,Autoplay]}
//           className="mySwiper w-full max-sm:order-1"
//         >
//           <SwiperSlide>
//             <div className="space-y-[18px] w-full">
//               <div className="w-full relative h-[700px] flex justify-end">
//                 <Image src={data.img1} fill alt="swip1" />
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="space-y-[18px] w-full">
//               <div className="w-full relative h-[700px] flex justify-end">
//                 <Image src={data.img2} fill alt="swip2" />
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="space-y-[18px] w-full">
//               <div className="w-full relative h-[700px] flex justify-end">
//                 <Image src={data.img3} fill alt="swip3" />
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>

// -------------------------------------------------------------------------
// "use client"

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Image from "next/image";
// import { Autoplay } from 'swiper/modules';

// const sliderImage = [
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002020%20(1).svg",
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002019.svg",
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002009.svg",
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002020.svg",
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002011.svg",
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002009%20(1).svg",
//   "https://nooera.s3.amazonaws.com/Portofolio/Group%201000002010.svg",
// ];

// const SliderSection = () => {
//   return (
//     <Swiper
//       autoplay={{
//         delay: 1500,
//         disableOnInteraction: false,
//       }}
//       loop
//       modules={[Autoplay]}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//       speed={600}
//       breakpoints={{
//         390: {
//           slidesPerView: 1.5,
//           spaceBetween: 10,
//         },
//         640: {
//           slidesPerView: 1.5,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 1.2,
//           spaceBetween: 10,
//         },
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         1280: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//         },
//         1536: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//         }
//       }}
//     >
//       <div>
//         {sliderImage.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//             >
//               <Image
//                 src={item}
//                 width={500} height={500}
//                 objectFit="cover"
//                 alt="carousel"
//                 priority
//                 className="rounded-3xl max-sm:h-full max-lg:h-[445px]" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </div>
//     </Swiper>
//   );
// };

// export default SliderSection;
