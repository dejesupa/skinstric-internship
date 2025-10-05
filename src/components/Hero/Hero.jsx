import { useState } from "react";
import { Link } from "react-router-dom";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import LeftDiamond from "../../assets/LeftDiamond.svg";
import RightDiamond from "../../assets/RightDiamond.svg";

export default function Hero() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      {/* Title (desktop only, split hover effect) */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          className={`relative z-30 text-[60px] lg:text-[100px] text-[#1A1B1C]
            font-inter font-normal tracking-tighter leading-none
            bg-white text-center
            transition-transform duration-700 ease-in-out
            ${hoverSide === "left" ? "translate-x-[25vw]" : ""}
            ${hoverSide === "right" ? "-translate-x-[25vw]" : ""}`}
        >
          <span className="bg-white">Sophisticated</span> <br />
          <span className="block bg-white">skincare</span>
        </h1>
      </div>

      {/* Desktop left diamond */}
      <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 items-center gap-2">
        <img src={LeftDiamond} alt="Discover AI" className="w-[200px]" />
      </div>

      {/* Desktop right diamond */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2">
        <img src={RightDiamond} alt="Take Test" className="w-[200px]" />
      </div>

      {/* Desktop bottom-left paragraph */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-10 max-w-xs text-sm font-semibold text-[#1A1B1C] leading-relaxed uppercase bg-white">
        SKINSTRIC developed an A.I. that creates a <br />
        highly-personalized routine tailored to <br />
        what your skin needs.
      </div>

      {/* ---------- MOBILE/TABLET VERSION ---------- */}
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="relative flex items-center justify-center">
          {/* Outer Diamond */}
          <div className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] border border-dotted border-[#A0A0AB] rotate-45"></div>

          {/* Inner Diamond */}
          <div className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] border border-dotted border-[#A0A0AB] rotate-45"></div>
        </div>

        {/* Upright Content (separate from rotated diamonds) */}
        <div className="absolute text-center px-4">
          <h1 className="text-[32px] sm:text-[48px] font-normal tracking-tight text-[#1A1B1C] leading-tight">
            Sophisticated <br /> skincare
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Skinstric developed an A.I. that creates a <br />
            highly-personalized routine tailored to <br />
            what your skin needs.
          </p>

        {/* CTA Link to TestPage */}
<Link
  to="/testing"
  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 hover:scale-110"
>
  ENTER EXPERIENCE
  <div className="relative flex items-center justify-center w-[20px] h-[20px] border border-black rotate-45">
    <svg
      viewBox="0 0 24 24"
      className="absolute rotate-[-45deg] w-3 h-3 text-black"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
</Link>
        </div>
      </div>

      {/* Left + Right hover sections (desktop only) */}
      <LeftSection hoverSide={hoverSide} setHoverSide={setHoverSide} />
      <RightSection hoverSide={hoverSide} setHoverSide={setHoverSide} />

      {/* Safelist helper for Tailwind transforms */}
      <div className="hidden translate-x-[25vw] -translate-x-[25vw]"></div>
    </section>
  );
}

