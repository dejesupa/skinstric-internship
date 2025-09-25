import { useState } from "react";

export default function Hero() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      {/* --- Centered Title Wrapper --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          className={`
            z-20 text-[60px] lg:text-[100px]
            text-[#1A1B1C] font-inter font-normal tracking-tighter leading-none
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

      {/* --- Mobile Paragraph (centered under title) --- */}
      <p className="z-10 absolute bottom-[20%] left-1/2 -translate-x-1/2 max-w-[30ch] text-[16px] font-semibold text-center text-[#1a1b1c83] lg:hidden">
        Skinstric developed an A.I. that creates a highly-personalized routine
        tailored to what your skin needs.
      </p>

      {/* --- Mobile Enter Experience Button --- */}
      <div className="z-10 absolute bottom-[10%] left-1/2 -translate-x-1/2 lg:hidden">
        <a href="/testing">
          <button className="group relative flex items-center gap-4 hover:scale-105 duration-300">
            <span className="text-[12px] font-bold cursor-pointer">
              ENTER EXPERIENCE
            </span>
            <div className="w-[24px] h-[24px] border border-black rotate-45 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="absolute rotate-[-45deg] w-4 h-4 text-black transition-transform duration-300 group-hover:scale-125"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </a>
      </div>

      {/* --- Desktop Paragraph (fixed bottom-left) --- */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-10 max-w-xs text-sm font-semibold text-[#1A1B1C] leading-relaxed uppercase bg-white">
        SKINSTRIC developed an A.I. that creates a <br />
        highly-personalized routine tailored to <br />
        what your skin needs.
      </div>

      {/* --- Mobile dotted background squares --- */}
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="w-[350px] h-[350px] border border-dotted border-[#A0A0AB] rotate-45"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <div className="w-[420px] h-[420px] border border-dotted border-[#A0A0AB] rotate-45"></div>
      </div>

      {/* --- Desktop Left Section --- */}
      <div
        className="hidden md:block fixed left-[calc(-25vw)] lg:left-[calc(-20vw)]
                   top-1/2 -translate-y-1/2 w-[280px] lg:w-[350px] h-[280px] lg:h-[350px] z-10"
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full border border-dotted border-[#A0A0AB] rotate-45 absolute inset-0"></div>

          <button
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
            className={`group absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/5 
                        inline-flex items-center gap-3 text-sm font-normal text-[#1A1B1C]
                        transition-opacity duration-500
                        ${hoverSide === "right" ? "opacity-0" : "opacity-100"}`}
          >
            <div className="relative flex items-center justify-center w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300">
              <svg
                viewBox="0 0 24 24"
                className="absolute rotate-[-45deg] w-5 h-5 text-black transition-transform duration-300 group-hover:scale-125"
                fill="currentColor"
              >
                <path d="M16 5v14L5 12z" />
              </svg>
            </div>
            <span>DISCOVER A.I.</span>
          </button>
        </div>
      </div>

      {/* --- Desktop Right Section --- */}
      <div
        className="hidden md:block fixed right-[calc(-25vw)] lg:right-[calc(-20vw)]
                   top-1/2 -translate-y-1/2 w-[280px] lg:w-[350px] h-[280px] lg:h-[350px] z-10"
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full border border-dotted border-[#A0A0AB] rotate-45 absolute inset-0"></div>

          <a href="/testing">
            <button
              onMouseEnter={() => setHoverSide("right")}
              onMouseLeave={() => setHoverSide(null)}
              className={`group absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 
                          inline-flex items-center gap-3 text-sm font-normal text-[#1A1B1C]
                          transition-opacity duration-500
                          ${hoverSide === "left" ? "opacity-0" : "opacity-100"}`}
            >
              <span>TAKE TEST</span>
              <div className="relative flex items-center justify-center w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute rotate-[-45deg] w-5 h-5 text-black transition-transform duration-300 group-hover:scale-125"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>

      {/* --- Tailwind safelist trick --- */}
      <div className="hidden translate-x-[25vw] -translate-x-[25vw]"></div>
    </section>
  );
}
