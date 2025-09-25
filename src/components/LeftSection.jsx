export default function LeftSection() {
  return (
    <div
      id="left-section"
      className="hidden md:block fixed left-[calc(-25vw)] lg:left-[calc(-20vw)] top-1/2 -translate-y-1/2 w-[280px] lg:w-[350px] h-[280px] lg:h-[350px] transition-opacity duration-500 ease-in-out"
    >
      <div
  onMouseEnter={() => setHoverSide("left")}
  onMouseLeave={() => setHoverSide(null)}
  className="hidden md:block fixed left-[calc(-25vw)] lg:left-[calc(-20vw)] top-1/2 -translate-y-1/2 w-[280px] lg:w-[350px] h-[280px] lg:h-[350px]"
>
  <div className="relative w-full h-full">
    {/* Dotted square */}
    <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>

    {/* Button */}
    <button className="group absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/5 inline-flex items-center gap-3 text-sm font-normal text-[#1A1B1C]">
      <div className="relative flex items-center justify-center w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300">
        <span className="absolute rotate-[-45deg]">◀</span>
      </div>
      <span>DISCOVER A.I.</span>
    </button>
  </div>
</div>

    </div>
  );
}
