import React from "react";
import Banner01 from "./Banner01";
import Banner02 from "./Banner02";
import Banner03 from "./Banner03";
import Banner04 from "./Banner04";
import Banner05 from "./Banner05";
import { arr2, arr7 } from "./banner03Data";
import { arr6 } from "./CTBdata";
import Banner06 from "./Banner06";
import Banner08 from "./Banner08";
import Banner07 from "./Banner07";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <Banner01 />
      <Banner02 src="https://images.bewakoof.com/uploads/grid/app/Daily-Deal-Tshirts-Desktop-Thin-strip-banner-1708447833.jpg" />
      <Banner03 name="TRENDING CATEGORIES" arr2={arr2} />
      <Banner04 />
      <Banner05 />
      <Banner03 name="CATEGORIES TO BAG" arr2={arr6} />
      <Banner06 />
      <Banner03 name="TOP ACCESSORIES" arr2={arr7} />
      <Banner07 />
      <Banner08 />
      <div className="flex flex-col gap-2 -mt-1">
        <Banner02 src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" />
        <Banner02 src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" />
      </div>
    </div>
  );
};

export default HeroSection;
