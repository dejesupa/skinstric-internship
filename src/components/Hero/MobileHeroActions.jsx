import React from "react";
import { Link } from "react-router-dom"; // or swap to <a> if no BrowserRouter

const MobileHeroActions = () => {
  return (
    <div className="z-10 mt-4 lg:hidden">
      <Link to="/testing">
        <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
          <span className="text-[12px] font-bold cursor-pointer">
            ENTER EXPERIENCE
          </span>

          {/* Diamond shape */}
          <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>

          {/* Arrow inside the diamond */}
          <span className="absolute left-[129px] scale-[0.5] hover:scale-60 duration-300">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current text-black"
            >
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default MobileHeroActions;
