import React from "react";

const Banner03 = ({ name, arr2 }) => {
  console.log(arr2);
  return (
    <div className="flex flex-col gap-4 px-1">
      <div className="flex justify-center text-xl font-semibold">{name}</div>
      <div className="flex flex-wrap gap-1 justify-center">
        {arr2.map((data, i) => {
          return (
            <div key={i}>
              <img src={data.src} alt="" width="220px" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner03;
