import React from "react";

const BackgroundDiamond = () => {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2"></div>
      </div>
    </>
  );
};

export default BackgroundDiamond;
