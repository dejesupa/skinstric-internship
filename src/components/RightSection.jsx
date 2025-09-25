export default function RightSection() {
  return (
    <div
      id="right-section"
      className="hidden md:block fixed right-[calc(-25vw)] lg:right-[calc(-20vw)] top-1/2 -translate-y-1/2 w-[280px] lg:w-[350px] h-[280px] lg:h-[350px] transition-opacity duration-500 ease-in-out"
    >
      <div
  onMouseEnter={() => setHoverSide("right")}
  onMouseLeave={() => setHoverSide(null)}
  className="hidden md:block fixed right-[calc(-25vw)] lg:right-[calc(-20vw)] top-1/2 -translate-y-1/2 w-[280px] lg:w-[350px] h-[280px] lg:h-[350px]"
>
  <div className="relative w-full h-full">
    {/* Dotted square */}
    <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>

    {/* Button */}
    <a href="/testing">
      <button className="group absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 inline-flex items-center gap-3 text-sm font-normal text-[#1A1B1C]">
        <span>TAKE TEST</span>
        <div className="relative flex items-center justify-center w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300">
          <span className="absolute rotate-[-45deg]">▶</span>
        </div>
      </button>
    </a>
  </div>
</div>

    </div>
  );
}
