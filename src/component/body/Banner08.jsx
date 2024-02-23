import React from "react";

const Banner08 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center text-xl font-semibold">
        OUR BEST PICKS
      </div>
      <div>
        <div className="grid grid-cols-2">
          <div className="p-1">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp"
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-banner-1704439012.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpg"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner08;
