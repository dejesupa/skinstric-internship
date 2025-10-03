import { Link, useLocation } from "react-router-dom";
import backDiamond from "../../assets/backbutton.svg";
import summaryDiamond from "../../assets/getSummary.svg";

function HoverDiamond({ children, clickable, to, state }) {
  const Wrapper = clickable ? Link : "div";

  return (
    <div className="relative group flex items-center justify-center">
      {/* Ripple Diamonds */}
      <svg
        className="absolute w-[180px] h-[180px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        viewBox="0 0 100 100"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="0.1 6"
          transform="rotate(45 50 50)"
        />
      </svg>
      <svg
        className="absolute w-[210px] h-[210px] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000 delay-150"
        viewBox="0 0 100 100"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="0.1 6"
          transform="rotate(45 50 50)"
        />
      </svg>

      {/* Tile */}
      <Wrapper
        to={to}
        state={state}
        className={`relative z-10 w-[150px] h-[150px] ${
          clickable ? "bg-gray-200 hover:bg-gray-300 cursor-pointer" : "bg-gray-100 cursor-not-allowed"
        } transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase transition-transform duration-300`}
      >
        <span className="transform -rotate-45">{children}</span>
      </Wrapper>
    </div>
  );
}

export default function DemographicsPage() {
  const location = useLocation();
  const { capturedImage } = location.state || {};

  return (
    <section className="min-h-screen flex flex-col justify-between bg-white text-[#1A1B1C]">
      {/* Left Text */}
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="text-sm mt-1 uppercase leading-[24px]">
          A.I. HAS ESTIMATED THE FOLLOWING.
          <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </p>
      </div>

     
{/* Diamond Grid */}
<div className="flex flex-1 items-center justify-center">
  {/* Wrapper with hover group */}
  <div className="relative group inline-block">
    
    {/* Big hover outline diamond */}
   <div
  className="
    absolute inset-0 -m-8 rotate-45
    border-2 border-dotted border-gray-300
    opacity-0 scale-90
    transition-all duration-500 ease-out
    group-hover:opacity-100 group-hover:scale-100
    group-hover:animate-pulse-scale
  "
></div>

    {/* Diamond Grid (3x3 with only center axes filled) */}
    <div className="grid grid-cols-3 grid-rows-3 gap-0 relative z-10">
      
      {/* Top */}
      <div className="flex items-center justify-center col-start-2">
        <Link
          to="/summary"
          state={{ capturedImage }}
          className="w-[150px] h-[150px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold uppercase cursor-pointer transition-all duration-300"
        >
          <span className="-rotate-45">Demographics</span>
        </Link>
      </div>

      {/* Left */}
      <div className="flex items-center justify-center row-start-2 col-start-1">
        <div className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 transform rotate-45 flex items-center justify-center -m-5 font-semibold uppercase cursor-not-allowed">
          <span className="-rotate-45 text-center px-2 leading-tight">
            Cosmetic Concerns
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center row-start-2 col-start-3">
        <div className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 transform rotate-45 flex items-center justify-center -m-5 font-semibold uppercase cursor-not-allowed">
          <span className="-rotate-45">Skin Type Details</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-center row-start-3 col-start-2">
        <div className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 transform rotate-45 flex items-center justify-center -m-5 font-semibold uppercase cursor-not-allowed">
          <span className="-rotate-45">Weather</span>
        </div>
      </div>
    </div>
  </div>
</div>




   <footer className="pt-4 pb-8 bg-white">
  <div className="flex justify-between items-center w-full px-9">
    
    {/* Back Button */}
    <Link to="/" className="flex items-center gap-6 text-sm font-semibold text-[#1A1B1C]">
      <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45 transition-transform duration-300 hover:scale-110">
        <svg
          viewBox="0 0 24 24"
          className="absolute rotate-[-45deg] w-5 h-5 text-black"
          fill="currentColor"
        >
          <path d="M16 5v14L5 12z" /> {/* left arrow */}
        </svg>
      </div>
      <span>BACK</span>
    </Link>

    {/* Get Summary Button */}
    <Link
      to="/summary"
      state={{ capturedImage }}
      className="flex items-center gap-6 text-sm font-semibold text-[#1A1B1C]"
    >
      <span>GET SUMMARY</span>
      <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45 transition-transform duration-300 hover:scale-110">
        <svg
          viewBox="0 0 24 24"
          className="absolute rotate-[-45deg] w-5 h-5 text-black"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" /> {/* right arrow */}
        </svg>
      </div>
    </Link>
  </div>
</footer>
    </section>
  );
}
