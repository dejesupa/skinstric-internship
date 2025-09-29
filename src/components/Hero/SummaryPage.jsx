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
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">Analyzing image...</p>
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
<footer className="sticky bottom-0 bg-white py-2">
  <div className="flex justify-between items-center px-6 relative">
    {/* Left: Back button (link) */}
    <Link to="/demographics" className="flex items-center gap-2">
      <img src={backButton} alt="Back" className="w-16 h-16" />
    </Link>

    {/* Center: Helper text */}
    <p className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-500">
      If A.I. estimate is wrong, select the correct one.
    </p>

    {/* Right: Home button */}
   <Link to="/" className="flex items-center gap-2">
  <span className="text-xs font-semibold">HOME</span>
  <img
    src={homeButton}
    alt="Home"
    className="w-8 h-8 hover:scale-105 transition-transform"
  />
</Link>

  </div>
</footer>



    </section>
  );
}
