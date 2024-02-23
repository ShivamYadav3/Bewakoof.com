import React from "react";
import { VscHeart, VscSearch } from "react-icons/vsc";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { BsPerson, BsPersonFillSlash } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="h-12 flex justify-between items-center w-[85%] m-auto">
        <div className="flex gap-14 text-sm">
          <div>
            <img
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              alt="img"
              width="147"
            />
          </div>
          <div className="flex gap-6">
            <div>MEN</div>
            <div>WOMEN</div>
            <div>MOBILE COVERS</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex h-10 w-72 box-content px-2 gap-3 bg-[#eee] border rounded-lg items-center">
            <div>
              <IoSearch />
            </div>
            <div>
              <input
                type="text"
                className="outline-none h-10 bg-[#eee] text-xs"
                placeholder="Search by product, category or collection"
              />
            </div>
          </div>
          <div className="w-0 h-6 border"></div>

          <div>
            <BsPerson className="text-2xl" />
          </div>
          <div>
            <VscHeart className="text-2xl" />
          </div>
          <div>
            <IoBagOutline className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
