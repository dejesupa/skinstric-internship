import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center relative">
      {/* Top Left */}
      <div className="absolute top-16 left-9 text-left">
        <p className="font-semibold text-xs">TO START ANALYSIS</p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 z-10">
        <p className="text-2xl font-normal text-[#1A1B1C] tracking-wide">
          Thank you!
        </p>
        <p className="text-lg text-gray-600">Proceed for the next step</p>
      </div>

     {/* Proceed Button */}
<Link
  to="/capture"
  className="absolute bottom-8 right-8 group flex flex-row items-center gap-6 text-sm font-semibold text-[#1A1B1C]"
>
  <span>PROCEED</span>
  <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45 transition-transform duration-300 group-hover:scale-110">
    <svg
      viewBox="0 0 24 24"
      className="absolute rotate-[-45deg] w-5 h-5 text-black"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" /> 
    </svg>
  </div>
</Link>

      {/* Back Button */}
     <div className="absolute bottom-8 left-8 flex items-center">
  <Link to="/testing">
    <button className="inline-flex items-center gap-6 text-sm font-semibold text-[#1A1B1C]">
        
      {/* Diamond */}
      <div
        className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45
                   transition-transform duration-300 hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="absolute rotate-[-45deg] w-5 h-5 text-black"
          fill="currentColor"
        >
          <path d="M16 5v14L5 12z" />
        </svg>
      </div>
            <span>BACK</span>
          </button>
        </Link>
      </div>

      {/* Background rotating dotted diamonds */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-dotted border-gray-300 rotate-45 animate-spin-slow"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dotted border-gray-300 rotate-45 animate-spin-slower"></div>

    </section>
  );
}
