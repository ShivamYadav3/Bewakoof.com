import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="w-52 flex flex-col gap-2 border border-[#d6d6d6] pb-6">
      <div>
        <img src={data.url} alt="" />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="text-[#4f5362] text-sm font-semibold">
              Bewakoof®
            </div>
            <div className="whitespace-nowrap flex flex-col items-start overflow-hidden text-ellipsis w-36 text-xs text-[#737373]">
              {data.name}
            </div>
          </div>
          <div>
            <img src="https://images.bewakoof.com/web/Wishlist.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="font-bold text-base">₹{data.finalPrice}</div>
          <div className="text-sm text-[#949494] line-through">
            ₹1{data.originalPrice}
          </div>
          <div className="text-sm text-[#00b852] font-bold">
            {data.discount}% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
