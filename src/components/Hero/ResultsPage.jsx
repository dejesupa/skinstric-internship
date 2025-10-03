import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import camera from "../../assets/camera.svg";
import gallery from "../../assets/gallery.svg";
import takePictureIcon from "../../assets/takePictureIcon.png";
import cameraIcon from "../../assets/camera-icon.png";
import rombuses from "../../assets/rombuses.svg";


export default function ResultPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
   const [analyzing, setAnalyzing] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Start camera when active
  useEffect(() => {
    if (cameraActive && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error("Camera access denied:", err);
        });
    }
  }, [cameraActive]);

  // Handle gallery selection
  const handleGallerySelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result); // saves Base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Capture from video
  const handleCapture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setCapturedImage(canvas.toDataURL("image/png")); // base64
    setCameraActive(false);
  };

  // Proceed to demographics
 const handleProceed = () => {
    setAnalyzing(true); // show analyzing loader
    setTimeout(() => {
      navigate("/demographics", { state: { capturedImage } });
    }, 3000); // 3s delay before navigating
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-center">
       {/* 🔄 Analyzing Loading Screen */}
      {analyzing && (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-50">
    {/* Inner dotted diamond */}
    <svg
      className="absolute w-[280px] h-[280px] animate-[spin_30s_linear_infinite]"
      viewBox="0 0 100 100"
    >
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        fill="none"
        stroke="#D1D5DB"
        strokeWidth="0.8"
        strokeLinecap="round"   // ⬅️ makes the stroke into circles
        strokeDasharray="0.05 7" // ⬅️ dot + spacing
        strokeDashoffset="0"
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
      className="absolute w-[400px] h-[400px] animate-[spin_60s_linear_infinite]"
      viewBox="0 0 100 100"
    >
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        fill="none"
        stroke="#D1D5DB"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="0.05 7" // slightly more spaced out
        strokeDashoffset="0"
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

    {/* Text */}
    <div className="relative flex items-center justify-center">
  {/* Rotating dots */}
  <div className="absolute w-16 h-16 animate-spin-slow">
  </div>

  {/* Text */}
  <p className="relative z-10 font-semibold text-sm md:text-base text-black">
    PREPARING YOUR ANALYSIS ...
  </p>
</div>

  </div>
)}
      
      {/* Hidden File Input for Gallery */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="galleryInput"
        onChange={handleGallerySelect}
      />

      {/* Camera and Gallery Options */}
      {!cameraActive && !loading && !capturedImage && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-20">
          {/* Camera Option */}
          <button
  className="relative inline-flex cursor-pointer z-10"
  onClick={() => setShowModal(true)}
>
  <img
    src={camera}
    alt="Camera Icon"
    className="transition-transform duration-500 hover:scale-105"
  />
</button>

          {/* Gallery Option */}
         <button
  className="relative inline-flex cursor-pointer z-10"
  onClick={() => document.getElementById("galleryInput").click()}
>
  <img
    src={gallery}
    alt="Gallery Icon"
    className="transition-transform duration-500 hover:scale-105"
  />
</button>
        </div>
      )}

      {/* Loading State */}
      {loading && !cameraActive && (
  <div className="h-[85vh] flex flex-col items-center justify-center relative text-center">
    {/* Rotating dotted diamonds */}
    <div className="relative flex items-center justify-center">
      <div className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] border border-dotted border-gray-300 animate-spin-slow"></div>
      <div className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] border border-dotted border-gray-300 animate-spin-slower"></div>
      <div className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] border border-dotted border-gray-300 animate-spin-slowest"></div>

      {/* Pulsing camera icon */}
      <img
        src={cameraIcon}
        alt="Camera Icon"
        className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] animate-pulse"
      />
    </div>

    {/* Main text */}
    <p className="mt-6 font-semibold text-sm md:text-base">
      SETTING UP CAMERA ...
    </p>

    {/* Helper tips */}
    <p className="mt-4 text-xs md:text-sm text-gray-700">
      TO GET BETTER RESULTS MAKE SURE TO HAVE
    </p>

    <div className="mt-2 flex gap-6 text-xs md:text-sm text-gray-600 items-center">
      <div className="flex items-center gap-2">
        <img src={rombuses} alt="diamond" className="w-3 h-3" />
        <span>NEUTRAL EXPRESSION</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={rombuses} alt="diamond" className="w-3 h-3" />
        <span>FRONTAL POSE</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={rombuses} alt="diamond" className="w-3 h-3" />
        <span>ADEQUATE LIGHTING</span>
      </div>
    </div>
  </div>
)}


      {/* Camera Active */}
      {cameraActive && !capturedImage && (
        <div className="h-[90vh] w-screen relative bg-gray-900">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
            <div className="font-semibold text-sm tracking-tight text-white hidden sm:block">
              TAKE PICTURE
            </div>
            <img
              src={takePictureIcon}
              alt="Take Picture"
              className="w-16 h-16 cursor-pointer transform hover:scale-105 transition"
              onClick={handleCapture}
            />
          </div>
        </div>
      )}

      {/* Captured Image Preview */}
      {capturedImage && (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
          {/* Fullscreen Captured Image */}
          <img
            src={capturedImage}
            alt="Preview"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay text */}
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg z-20">
            GREAT SHOT!
          </p>

          {/* Buttons */}
          <div className="absolute bottom-20 flex gap-6 z-20">
            <button
              className="px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
              onClick={() => setCapturedImage(null)}
            >
              Retake
            </button>
            <button
              className="px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-700"
              onClick={handleProceed}
            >
              Use This Photo
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1B1C] w-[90%] max-w-md shadow-lg z-50 p-4">
          <h2 className="text-[#FCFCFC] text-base font-semibold mb-12">
            ALLOW A.I. TO ACCESS YOUR CAMERA
          </h2>
          <div className="flex border-t border-[#FCFCFC] pt-2">
            <button
              onClick={() => setShowModal(false)}
              className="px-7 text-[#fcfcfca1] hover:text-gray-500"
            >
              DENY
            </button>
            <button
              onClick={() => {
                setShowModal(false);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setCameraActive(true);
                }, 3000);
              }}
              className="px-5 text-[#FCFCFC] font-semibold hover:text-gray-300"
            >
              ALLOW
            </button>
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
    </section>
  );
}
