export default function LeftSection({ hoverSide, setHoverSide }) {
  return (
    <div
      className={`
        hidden lg:block fixed top-1/2 left-[8%] -translate-y-1/2
        transition-opacity duration-500 ease-in-out
        ${hoverSide === "right" ? "opacity-0" : "opacity-100"}  /* ⬅️ inverted */
        z-0
      `}
      onMouseEnter={() => setHoverSide("left")}
      onMouseLeave={() => setHoverSide(null)}
    >
      <button className="group inline-flex items-center gap-3 text-sm font-semibold text-[#1A1B1C]">
        <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45">
          <svg viewBox="0 0 24 24" className="absolute rotate-[-45deg] w-5 h-5 text-black" fill="currentColor">
            <path d="M16 5v14L5 12z" />
          </svg>
        </div>
        <span className="ml-6">DISCOVER A.I.</span>
      </button>
    </div>
  );
}
