import { Link, useLocation } from "react-router-dom";
import backDiamond from "../../assets/backbutton.svg";
import summaryDiamond from "../../assets/getSummary.svg";

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
  <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
    {/* Top: Demographics (clickable) */}
    <div className="flex items-center justify-center col-start-2">
      <Link
        to="/summary"
        state={{ capturedImage }}
        className="w-[150px] h-[150px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300"
      >
        <span className="transform -rotate-45">Demographics</span>
      </Link>
    </div>

    {/* Left: Cosmetic Concerns */}
    <div className="flex items-center justify-center row-start-2 col-start-1">
      <div className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
        <span className="transform -rotate-45">Cosmetic Concerns</span>
      </div>
    </div>

    {/* Right: Skin Type Details */}
    <div className="flex items-center justify-center row-start-2 col-start-3">
      <div className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
        <span className="transform -rotate-45">Skin Type Details</span>
      </div>
    </div>

    {/* Bottom: Weather */}
    <div className="flex items-center justify-center row-start-3 col-start-2">
      <div className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
        <span className="transform -rotate-45">Weather</span>
      </div>
    </div>
  </div>
</div>

      {/* Bottom Nav */}
      <footer className="pt-4 pb-8 bg-white">
        <div className="flex justify-between max-w-full mx-auto px-9">
          {/* Back Button */}
          <Link to="/result" state={{ capturedImage }} className="flex items-center gap-3">
            <img
              src={backDiamond}
              alt="Back Button"
              className="w-20 h-20 hover:scale-105 transition-transform"
            />
          </Link>

          {/* Get Summary Button */}
          <Link to="/summary" state={{ capturedImage }} className="flex items-center gap-3">
            <img
              src={summaryDiamond}
              alt="Summary Button"
              className="w-30 h-20 hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </footer>
    </section>
  );
}
