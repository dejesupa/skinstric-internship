import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import backButton from "../../assets/backbutton.svg";
import { Link } from "react-router-dom";
import homeButton from "../../assets/homeButton.svg";




export default function SummaryPage() {
  const location = useLocation();
  const { capturedImage } = location.state || {};
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // Which section user is looking at: "race" | "age" | "gender"
  const [activeCategory, setActiveCategory] = useState("race");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (capturedImage) {
      analyzeImage();
    }
  }, [capturedImage]);

  const analyzeImage = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        { image: capturedImage }
      );
      const data = res.data.data;

      const sortedRace = Object.entries(data.race).sort((a, b) => b[1] - a[1]);
      const sortedAge = Object.entries(data.age).sort((a, b) => b[1] - a[1]);
      const sortedGender = Object.entries(data.gender).sort(
        (a, b) => b[1] - a[1]
      );

      setResults({
        race: sortedRace,
        age: sortedAge,
        gender: sortedGender,
      });

      // Default: race top result
      setSelectedItem(sortedRace[0]);
    } catch (err) {
      console.error("Error:", err);
      alert("Error analyzing image");
    } finally {
      setLoading(false);
    }
  };

if (loading) {
  return (
    <div className="flex h-screen items-center justify-center relative bg-white">
      {/* Inner dotted diamond */}
      <svg
        className="absolute w-[180px] h-[180px] animate-[spin_30s_linear_infinite]"
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
          strokeLinecap="round"     // ✅ makes dots circular
          strokeDasharray="0.1 6"   // ✅ dot + spacing
          transform="rotate(45 50 50)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;6"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {/* Outer dotted diamond */}
      <svg
        className="absolute w-[260px] h-[260px] animate-[spin_60s_linear_infinite]"
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
          strokeLinecap="round"     // ✅ rounded stroke
          strokeDasharray="0.1 7"   // ✅ slightly wider spacing
          transform="rotate(45 50 50)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;8"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {/* Text in the center */}
      <p className="relative z-10 text-lg font-semibold text-black">
        Analyzing image...
      </p>
    </div>
  );
}


  if (!results) return null;

  const activeList = results[activeCategory];

  return (
 <section className="min-h-screen flex flex-col bg-white text-[#1A1B1C]">
  <main className="flex-1 w-full bg-white overflow-auto px-6 md:px-12 pt-10 md:pt-16">
    {/* Header */}
    <div className="text-start mb-8">
      <h2 className="text-base font-semibold mb-1">A.I. ANALYSIS</h2>
      <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
        DEMOGRAPHICS
      </h3>
      <h4 className="text-sm mt-2">PREDICTED RACE &amp; AGE</h4>
    </div>

    {/* Layout Grid fills remaining space */}
    <div className="grid flex-1 md:grid-cols-[1.5fr_8.5fr_3fr] gap-4">
          {/* Sidebar Tabs */}
          <div className="space-y-3">
            {/* Race */}
            <div
              className={`p-3 cursor-pointer ${
                activeCategory === "race"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveCategory("race");
                setSelectedItem(results.race[0]);
              }}
            >
              <p className="text-base font-semibold">{results.race[0][0]}</p>
              <h4 className="text-base font-semibold">RACE</h4>
            </div>

            {/* Age */}
            <div
              className={`p-3 cursor-pointer ${
                activeCategory === "age"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveCategory("age");
                setSelectedItem(results.age[0]);
              }}
            >
              <p className="text-base font-semibold">{results.age[0][0]}</p>
              <h4 className="text-base font-semibold">AGE</h4>
            </div>

            {/* Gender */}
            <div
              className={`p-3 cursor-pointer ${
                activeCategory === "gender"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveCategory("gender");
                setSelectedItem(results.gender[0]);
              }}
            >
              <p className="text-base font-semibold">{results.gender[0][0]}</p>
              <h4 className="text-base font-semibold">SEX</h4>
            </div>
          </div>


{/* Center Chart */}
<div className="relative bg-gray-100 w-full h-full min-h-[500px] px-6 py-12">
  {/* Label on the left */}
  <p className="absolute top-6 left-8 text-[32px] font-normal capitalize">
    {selectedItem ? selectedItem[0] : ""}
  </p>

{/* Circle off to the right */}
<div className="absolute right-16 top-1/2 -translate-y-1/2 w-[240px] md:w-[300px] aspect-square flex items-center justify-center">
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Gray full circle background */}
    <div className="absolute inset-0 rounded-full border-[8px] border-gray-300"></div>

    {/* Black active slice */}
    <div
      className="absolute inset-0 rounded-full border-[8px] border-black"
      style={{
        clipPath: `inset(${100 - (selectedItem?.[1] * 100).toFixed(0)}% 0 0 0)`,
      }}
    ></div>

    {/* Percentage text */}
    <p className="text-3xl font-normal">
      {(selectedItem?.[1] * 100).toFixed(0)}%
    </p>
  </div>
</div>

</div>

{/* Confidence List */}
<div className="bg-gray-100 pt-4 pb-4">
  <div className="flex justify-between px-4 mb-2">
    <h4 className="font-medium uppercase">{activeCategory}</h4>
    <h4 className="font-medium">A.I. CONFIDENCE</h4>
  </div>
  {activeList.map(([label, confidence]) => {
    const isSelected = selectedItem && selectedItem[0] === label;
    return (
      <div
        key={label}
        className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
          isSelected ? "bg-black text-white" : "hover:bg-gray-200"
        }`}
        onClick={() => setSelectedItem([label, confidence])}
      >
        {/* Left side: diamond + label */}
        <div className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rotate-45 border border-black ${
              isSelected ? "bg-white" : "bg-transparent"
            }`}
          ></div>
          <span className="capitalize">{label}</span>
        </div>

        {/* Right side: percentage */}
        <span>{(confidence * 100).toFixed(0)}%</span>
      </div>
    );
  })}
</div>
        </div>
      </main>

    {/* Footer */}
<footer className="sticky bottom-0 bg-white pt-8 pb-2">
  <div className="flex justify-between items-center px-6 relative">
    {/* Left: Back button (link) */}
    {/* Back */}
          <Link to="/" className="flex items-center gap-6 text-sm font-semibold text-[#1A1B1C]">
            <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45 transition-transform duration-300 hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="absolute rotate-[-45deg] w-5 h-5 text-black"
                fill="currentColor"
              >
                <path d="M16 5v14L5 12z" />
              </svg>
            </div>
            <span>BACK</span>
          </Link>

    {/* Center: Helper text */}
    <p className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-500">
      If A.I. estimate is wrong, select the correct one.
    </p>

    {/* Right: Home button */}
   <Link
            to="/"
            state={{ capturedImage }}
            className="flex items-center gap-6 text-sm font-semibold text-[#1A1B1C]"
          >
            <span>HOME</span>
            <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45 transition-transform duration-300 hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="absolute rotate-[-45deg] w-5 h-5 text-black"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </Link>

  </div>
</footer>



    </section>
  );
}
