import React from "react";
import { BsPhone } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="h-7 flex justify-center items-center bg-[#eee] text-xs">
      <div className="flex justify-between w-[85%] m-auto">
        <div className="flex gap-6">
          <div>Offers</div>
          <div>Fanbook</div>
          <div className="flex gap-1">
            <div className="flex justify-center items-center">
              <BsPhone />
            </div>
            <div>Download App</div>
          </div>
          <div>TriBe Membership</div>
        </div>
        <div className="flex gap-6">
          <div>Contact Us</div>
          <div>Track Order</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
