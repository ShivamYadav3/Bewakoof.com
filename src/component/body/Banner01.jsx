import React from "react";
import { arr } from "./banner01Data";

const Banner01 = () => {
  return (
    <div className="px-20 w-full">
      <div className="flex flex-nowrap gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {arr.map((data, i) => {
          return (
            <div className="flex flex-col items-center text-xs w-full" key={i}>
              <div className="w-[140px]">
                <img src={data.url} alt="" width="200px" className="" />
              </div>
              <div>{data.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner01;
