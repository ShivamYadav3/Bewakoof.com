import React from "react";

import BSSlider from "./BSSlider";

const Banner07 = () => {
  return (
    <div className="flex flex-col gap-5 px-9">
      <div className="flex justify-center text-xl font-semibold">
        BESTSELLERS
      </div>

      {/* card------------------------------------- */}
      <div>
        <BSSlider />
      </div>

      <div className="flex justify-center text-[#42a2a2] font-semibold underline mb-4">
        Explore All
      </div>
    </div>
  );
};

export default Banner07;
