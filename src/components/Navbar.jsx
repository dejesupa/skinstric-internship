export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[64px] z-50 flex items-center justify-between px-6 py-3 bg-white">
      {/* --- Left Side: Logo + Intro --- */}
      <div className="flex items-center pt-1 scale-90">
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm text-[#1A1B1C]"
        >
          SKINSTRIC
        </a>

        {/* Left Bracket */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="18"
          viewBox="0 0 6 18"
          className="mx-1 text-[#1a1b1c83]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 1 H1 V17 H5" />
        </svg>

        {/* Intro Text */}
        <p className="text-[#1a1b1c83] font-semibold text-sm">INTRO</p>

        {/* Right Bracket */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="18"
          viewBox="0 0 6 18"
          className="mx-1 text-[#1a1b1c83]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M1 1 H5 V17 H1" />
        </svg>
      </div>

      {/* --- Right Side: Button --- */}
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold h-9 px-4 py-2 text-[10px] text-[#FCFCFC] bg-[#1A1B1C] leading-[16px] shadow hover:bg-black transition-colors duration-200 scale-90">
        ENTER CODE
      </button>
    </nav>
  );
}
