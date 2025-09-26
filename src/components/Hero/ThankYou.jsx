import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center relative">
      {/* Top Left Instruction */}
      <div className="absolute top-16 left-9 text-left">
        <p className="font-semibold text-xs">TO START ANALYSIS</p>
      </div>

      {/* Thank You Content */}
      <div className="flex flex-col items-center gap-4 z-10">
        <p className="text-2xl font-normal text-[#1A1B1C] tracking-wide">
          Thank you!
        </p>
        <p className="text-lg text-gray-600">Proceed for the next step</p>
      </div>

      {/* Proceed Button */}
      <Link
        to="/result"
        className="absolute bottom-8 right-8 group flex flex-row items-center gap-3"
      >
        <span className="mr-4 text-sm font-semibold">PROCEED</span>
        <div className="w-12 h-12 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 duration-300">
          <svg
            viewBox="0 0 24 24"
            className="absolute rotate-[-45deg] w-4 h-4 text-black transition-transform duration-300 group-hover:scale-125"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" /> {/* right arrow */}
          </svg>
        </div>
      </Link>

      {/* Back Button */}
      <Link
        to="/"
        className="absolute bottom-8 left-8 group flex flex-row items-center gap-3"
      >
        <div className="w-12 h-12 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 duration-300">
          <svg
            viewBox="0 0 24 24"
            className="absolute rotate-[-45deg] w-4 h-4 text-black transition-transform duration-300 group-hover:scale-125"
            fill="currentColor"
          >
            <path d="M16 5v14L5 12z" /> {/* left arrow */}
          </svg>
        </div>
        <span className="ml-4 text-sm font-semibold">BACK</span>
      </Link>

      {/* Background dotted diamonds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-dotted border-gray-300 rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dotted border-gray-300 rotate-45"></div>
    </section>
  );
}
