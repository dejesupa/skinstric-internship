import { Link } from "react-router-dom";

export default function RightSection({ hoverSide, setHoverSide }) {
  return (
    <div
      className={`
        hidden lg:block fixed top-1/2 right-[8%] -translate-y-1/2
        transition-opacity duration-500 ease-in-out
        ${hoverSide === "left" ? "opacity-0" : "opacity-100"}   /* ⬅️ inverted */
        z-0
      `}
      onMouseEnter={() => setHoverSide("right")}
      onMouseLeave={() => setHoverSide(null)}
    >
      <Link to="/testing">
        <button className="group inline-flex items-center gap-3 text-sm font-semibold text-[#1A1B1C]">
          <span className="mr-6">TAKE TEST</span>
          <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45">
            <svg viewBox="0 0 24 24" className="absolute rotate-[-45deg] w-5 h-5 text-black" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
}
