import { Link } from "react-router-dom";
import { useCapture } from "../context/CaptureContext"; 

export default function RightSection({ hoverSide, setHoverSide }) {
  const { setCapturedImage, setResults } = useCapture(); 

  return (
    <div
      className={`
        hidden lg:block fixed top-1/2 right-[8%] -translate-y-1/2
        transition-opacity duration-500 ease-in-out
        ${hoverSide === "left" ? "opacity-0" : "opacity-100"}  
        z-0
      `}
      onMouseEnter={() => setHoverSide("right")}
      onMouseLeave={() => setHoverSide(null)}
    >
      <Link
        to="/testing"
        onClick={() => {
          //Reset context when starting test
          setCapturedImage(null);
          setResults(null);
        }}
      >
        <button className="group inline-flex items-center gap-3 text-sm font-semibold text-[#1A1B1C]">
          <span className="mr-6">TAKE TEST</span>
          <div
            className="relative flex items-center justify-center 
                       w-[40px] h-[40px] border border-black rotate-45 
                       transition-transform duration-300 ease-in-out 
                       hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              className="absolute rotate-[-45deg] w-5 h-5 text-black"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
}

