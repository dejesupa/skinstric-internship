import { useState } from "react";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";

export default function Hero() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      {/* Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          className={`
            relative z-30  /* Title sits above arrows/diamonds */
            text-[60px] lg:text-[100px] text-[#1A1B1C]
            font-inter font-normal tracking-tighter leading-none
            bg-white text-center
            transition-transform duration-700 ease-in-out
            ${hoverSide === "left" ? "translate-x-[25vw]" : ""}
            ${hoverSide === "right" ? "-translate-x-[25vw]" : ""}
          `}
        >
          <span className="bg-white">Sophisticated</span> <br />
          <span className="block bg-white">skincare</span>
        </h1>
      </div>

      {/* Mobile paragraph */}
      <p className="z-10 absolute bottom-[20%] left-1/2 -translate-x-1/2 max-w-[30ch] text-[16px] font-semibold text-center text-[#1a1b1c83] lg:hidden">
        Skinstric developed an A.I. that creates a highly-personalized routine
        tailored to what your skin needs.
      </p>

      {/* Mobile button placeholder */}
      <div className="z-10 absolute bottom-[10%] left-1/2 -translate-x-1/2 lg:hidden">
        {/* Could add a Link or CTA button for mobile here */}
      </div>

      {/* Desktop paragraph */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-10 max-w-xs text-sm font-semibold text-[#1A1B1C] leading-relaxed uppercase bg-white">
        SKINSTRIC developed an A.I. that creates a <br />
        highly-personalized routine tailored to <br />
        what your skin needs.
      </div>

      {/* Background squares (mobile only) */}
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="w-[350px] h-[350px] border border-dotted border-[#A0A0AB] rotate-45"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="w-[420px] h-[420px] border border-dotted border-[#A0A0AB] rotate-45"></div>
      </div>

      {/* Left + Right Sections */}
      <LeftSection hoverSide={hoverSide} setHoverSide={setHoverSide} />
      <RightSection hoverSide={hoverSide} setHoverSide={setHoverSide} />

      {/* Safelist helper for Tailwind transforms */}
      <div className="hidden translate-x-[25vw] -translate-x-[25vw]"></div>
    </section>
  );
}
