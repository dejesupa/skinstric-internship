import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TestPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1 && formData.name.trim() !== "") {
      setStep(2); //  city step
    } else if (step === 2 && formData.city.trim() !== "") {
      setLoading(true); 

      const payload = {
        name: formData.name,
        location: formData.city,
      };

      // Save in localStorage
      localStorage.setItem("userData", JSON.stringify(payload));

      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        console.log("API Response:", data);

        
        setTimeout(() => {
          setLoading(false);
          navigate("/thankyou");
        }, 2000);
      } catch (error) {
        console.error("Error posting data:", error);
        setLoading(false);
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center relative">
      {/* Top Left */}
      <div className="absolute top-16 left-9 text-left">
        <p className="font-semibold text-xs">TO START ANALYSIS</p>
      </div>

      {/* Step 1: Introduce Yourself */}
      {step === 1 && !loading && (
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
          <form onSubmit={handleSubmit} className="relative z-10">
            <input
              type="text"
              placeholder="Introduce Yourself"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent 
                         border-b border-black focus:outline-none appearance-none 
                         w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] 
                         text-[#1A1B1C] z-10"
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Step 2: Your City */}
      {step === 2 && !loading && (
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
          <form onSubmit={handleSubmit} className="relative z-10">
            <input
              type="text"
              placeholder="your city name"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent 
                         border-b border-black focus:outline-none appearance-none 
                         w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] 
                         text-[#1A1B1C] z-10"
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-lg text-gray-500 mb-6">Processing submission</p>
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      )}

      {/* Back Button */}
     <div className="absolute bottom-8 left-8 flex items-center">
  <Link to="/">
    <button className="inline-flex items-center gap-6 text-sm font-semibold text-[#1A1B1C]">
      {/* Diamond */}
      <div
        className="relative flex items-center justify-center w-[40px] h-[40px] border border-black rotate-45
                   transition-transform duration-300 hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="absolute rotate-[-45deg] w-5 h-5 text-black"
          fill="currentColor"
        >
          <path d="M16 5v14L5 12z" />
        </svg>
      </div>
            <span>BACK</span>
          </button>
        </Link>
      </div>

      {/* Background rotating diamonds */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-dotted border-gray-300 rotate-45 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dotted border-gray-300 rotate-45 animate-[spin_40s_linear_infinite]"></div>
    </section>
  );
}
