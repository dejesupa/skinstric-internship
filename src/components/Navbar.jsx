import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row h-[64px] w-full justify-between items-center py-3 px-6 mb-3 relative z-[1000]">
      {/* Left Section: Logo + Intro */}
      <div className="flex flex-row items-center gap-3">
        <a
          href="/"
          className="inline-flex items-center justify-center font-semibold text-sm text-[#1A1B1C]"
        >
          SKINSTRIC
        </a>

        {/* Intro with text brackets */}
        <p className="text-[#1a1b1c83] font-semibold text-sm">[ INTRO ]</p>
      </div>

      {/* Right Section: Button */}
      <button className="inline-flex items-center justify-center font-semibold h-9 px-4 py-2 text-white text-xs bg-[#1A1B1C] leading-[16px]">
        ENTER CODE
      </button>
    </nav>
  );
};

export default Navbar;
