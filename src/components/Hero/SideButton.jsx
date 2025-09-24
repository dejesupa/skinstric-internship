import React from "react";
import { Link } from "react-router-dom"; // or swap with <a> if no BrowserRouter

const SideButton = ({ direction, text, link, position }) => {
  return (
    <div
      className={`hidden lg:block fixed ${position} top-1/2 -translate-y-1/2 w-[500px] h-[500px]`}
    >
      <div className="relative w-full h-full">
        {/* Dotted diamond background */}
        <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>

        {/* Button */}
        <Link to={link}>
          <button
            className={`group inline-flex items-center gap-4 text-sm absolute top-1/2 ${
              direction === "left"
                ? "right-0 -translate-y-1/2 translate-x-1/5 xl:translate-x-1/6"
                : "left-0 -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6"
            } px-3 py-1`}
          >
            {direction === "left" && (
              <>
                <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300"></div>
                <span className="absolute left-[18px] top-[8px] rotate-180">▶</span>
              </>
            )}

            <span>{text}</span>

            {direction === "right" && (
              <>
                <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300"></div>
                <span className="absolute left-[107px] top-[9px]">▶</span>
              </>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideButton;
