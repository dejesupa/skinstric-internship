import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCapture } from "../../context/CaptureContext"; // ✅ NEW import
import camera from "../../assets/camera.svg";
import gallery from "../../assets/gallery.svg";
import takePictureIcon from "../../assets/takePictureIcon.png";
import cameraIcon from "../../assets/camera-icon.png";
import rombuses from "../../assets/rombuses.svg";

// 🔄 Analyzing Loader
function AnalyzingLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 text-center">
      {/* Rotating Dotted Diamond */}
      <div className="relative flex items-center justify-center w-[260px] h-[260px]">
        <div className="absolute inset-0 border border-dotted border-gray-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute inset-6 border border-dotted border-gray-300 rotate-45 animate-spin-slower"></div>
        <p className="font-semibold text-sm md:text-base text-black z-10 text-center px-4">
          PREPARING YOUR ANALYSIS ...
        </p>
      </div>
    </div>
  );
}

// 📷 Camera Setup Loader
function CameraSetupLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 text-center">
      <div className="relative flex items-center justify-center w-[220px] h-[220px]">
        <div className="absolute inset-0 border border-dotted border-gray-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute inset-6 border border-dotted border-gray-300 rotate-45 animate-spin-slower"></div>
        <img
          src={cameraIcon}
          alt="Camera Icon"
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] z-10"
        />
      </div>
      <p className="mt-6 font-semibold text-sm md:text-base">SETTING UP CAMERA ...</p>
      <p className="mt-4 text-xs md:text-sm text-gray-700">
        TO GET BETTER RESULTS MAKE SURE TO HAVE
      </p>
      <div className="mt-2 flex gap-6 text-xs md:text-sm text-gray-600 items-center">
        <div className="flex items-center gap-2">
          <img src={rombuses} alt="diamond" className="w-3 h-3" />
          <span>◇ NEUTRAL EXPRESSION</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={rombuses} alt="diamond" className="w-3 h-3" />
          <span>◇ FRONTAL POSE</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={rombuses} alt="diamond" className="w-3 h-3" />
          <span>◇ ADEQUATE LIGHTING</span>
        </div>
      </div>
    </div>
  );
}

// 🖼 Capture Preview
function CapturePreview({ capturedImage, onRetake, onProceed }) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img
        src={capturedImage}
        alt="Preview"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg z-20">
        GREAT SHOT!
      </p>
      <div className="absolute bottom-20 flex gap-6 z-20">
        <button
          className="px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
          onClick={onRetake}
        >
          Retake
        </button>
        <button
          className="px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-700"
          onClick={onProceed}
        >
          Use This Photo
        </button>
      </div>
    </div>
  );
}

// 🎯 Main Component
export default function CameraPage() {
  const { capturedImage, setCapturedImage } = useCapture(); // ✅ Use global context
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied:", err);
    }
  };

  // ✅ Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    if (cameraActive) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => stopCamera();
  }, [cameraActive]);

  const handleGallerySelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result); // ✅ store globally
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setCapturedImage(canvas.toDataURL("image/png")); // ✅ store globally
  };

  const handleProceed = () => {
    setAnalyzing(true);
    setTimeout(() => {
      navigate("/demographics"); // ✅ no need to pass state anymore
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-white text-center">
      {/* 🔄 Analyzing */}
      {analyzing && <AnalyzingLoader />}

      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="galleryInput"
        onChange={handleGallerySelect}
      />

      {/* Top Bar */}
      {!cameraActive && !loading && !capturedImage && !analyzing && (
        <div className="absolute top-16 left-0 w-full flex justify-between items-start px-6">
          <p className="text-sm md:text-base font-semibold">TO START ANALYSIS</p>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-600 mb-1">Preview</span>
            <div className="w-24 h-24 border border-gray-300" />
          </div>
        </div>
      )}

      {/* Center Buttons */}
      {!cameraActive && !loading && !capturedImage && !analyzing && (
        <div className="flex min-h-screen items-center justify-center gap-20">
          <button
            className="relative inline-flex cursor-pointer z-10"
            onClick={() => setShowModal(true)}
          >
            <img
              src={camera}
              alt="Camera Icon"
              className="w-[60vw] max-w-[350px] md:w-[30vw] md:max-w-[400px] h-auto transition-transform duration-500 hover:scale-110"
            />
          </button>
          <button
            className="relative inline-flex cursor-pointer z-10"
            onClick={() => document.getElementById("galleryInput").click()}
          >
            <img
              src={gallery}
              alt="Gallery Icon"
              className="w-[60vw] max-w-[350px] md:w-[30vw] md:max-w-[400px] h-auto transition-transform duration-500 hover:scale-110"
            />
          </button>
        </div>
      )}

      {/* Loading Camera */}
      {loading && !cameraActive && <CameraSetupLoader />}

      {/* Active Camera */}
      {cameraActive && !capturedImage && (
        <div className="fixed inset-0 w-screen h-screen bg-black z-50">
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
          <div className="absolute bottom-24 sm:bottom-32 left-0 right-0 text-center z-20">
            <p className="text-sm mb-2 font-normal leading-6 text-white">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8 text-xs leading-6 text-white">
              <p>◇ NEUTRAL EXPRESSION</p>
              <p>◇ FRONTAL POSE</p>
              <p>◇ ADEQUATE LIGHTING</p>
            </div>
          </div>
        </div>
      )}

      {/* Captured Preview */}
      {capturedImage && !analyzing && (
        <CapturePreview
          capturedImage={capturedImage}
          onRetake={() => {
            setCapturedImage(null); // ✅ clear global
            stopCamera();
            setLoading(true);
            setTimeout(() => {
              startCamera();
              setCameraActive(true);
              setLoading(false);
            }, 600);
          }}
          onProceed={handleProceed}
        />
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-[#1A1B1C] w-[90%] max-w-sm rounded-md shadow-lg p-6 text-center">
            <h2 className="text-[#FCFCFC] text-base font-semibold mb-6">
              ALLOW A.I. TO ACCESS YOUR CAMERA
            </h2>
            <div className="flex border-t border-[#FCFCFC] pt-4 justify-around">
              <button
                onClick={() => setShowModal(false)}
                className="text-[#fcfcfca1] hover:text-gray-400"
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
                  }, 1500);
                }}
                className="text-[#FCFCFC] font-semibold hover:text-gray-200"
              >
                ALLOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="absolute bottom-8 left-8 flex items-center z-[9999]">
        <Link to="/testing">
          <button
            className={`inline-flex items-center gap-6 text-sm font-semibold 
              ${cameraActive ? "text-white" : "text-[#1A1B1C]"}`}
          >
            <div
              className={`relative flex items-center justify-center w-[40px] h-[40px] rotate-45
                transition-transform duration-300 hover:scale-110
                ${cameraActive ? "border border-white" : "border border-black"}`}
            >
              <svg
                viewBox="0 0 24 24"
                className={`absolute rotate-[-45deg] w-5 h-5 
                  ${cameraActive ? "text-white" : "text-black"}`}
                fill="currentColor"
              >
                <path d="M16 5v14L5 12z" />
              </svg>
            </div>
            <span className="uppercase">BACK</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
