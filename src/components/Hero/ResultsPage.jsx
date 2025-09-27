import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import camera from "../../assets/camera.svg";
import gallery from "../../assets/gallery.svg";
import takePictureIcon from "../../assets/takePictureIcon.png"; // 👈 add your asset

export default function ResultPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);

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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-center">

      {/* Camera and Gallery Options */}
      {!cameraActive && !loading && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-20">
          {/* Camera Option */}
          <button
            className="relative flex flex-col items-center cursor-pointer z-10"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img src={camera} alt="Camera Icon" />
          </button>

          {/* Gallery Option */}
          <button
            className="relative flex flex-col items-center cursor-pointer z-10"
            onClick={() => setShowModal(true)}
          >
            <img src={gallery} alt="Gallery Icon" />
          </button>
        </div>
      )}

      {/* Camera Loading State */}
      {loading && !cameraActive && (
        <div className="h-[85vh] flex flex-col items-center justify-center relative">
          <div className="relative flex items-center justify-center">
            {/* Rotating Diamonds */}
            <div className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] border border-dotted border-gray-300 animate-spin-slow"></div>
            <div className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] border border-dotted border-gray-300 animate-spin-slower"></div>
            <div className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] border border-dotted border-gray-300 animate-spin-slowest"></div>

            {/* Camera Icon */}
            <img
              src={camera}
              alt="Camera Icon"
              className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] animate-pulse"
            />
          </div>
          <p className="mt-6 font-semibold text-sm md:text-base animate-pulse">
            SETTING UP CAMERA ...
          </p>

          {/* Tips */}
          <div className="mt-8 text-center">
            <p className="text-xs md:text-sm mb-4 leading-6">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8 text-xs md:text-sm">
              <p>◇ NEUTRAL EXPRESSION</p>
              <p>◇ FRONTAL POSE</p>
              <p>◇ ADEQUATE LIGHTING</p>
            </div>
          </div>
        </div>
      )}

      {/* Camera Active State */}
      {cameraActive && (
        <div className="h-[90vh] w-screen relative bg-gray-900">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Take Picture button */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
            <div className="font-semibold text-sm tracking-tight text-white hidden sm:block">
              TAKE PICTURE
            </div>
            <img
              src={takePictureIcon}
              alt="Take Picture"
              className="w-16 h-16 cursor-pointer transform hover:scale-105 transition"
              onClick={() => alert("Picture taken!")} // Replace with real capture
            />
          </div>

          {/* Tips overlay */}
          <div className="absolute bottom-20 sm:bottom-40 left-0 right-0 text-center z-20">
            <p className="text-sm mb-2 font-normal text-white">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8 text-xs text-white">
              <p>◇ NEUTRAL EXPRESSION</p>
              <p>◇ FRONTAL POSE</p>
              <p>◇ ADEQUATE LIGHTING</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="absolute bottom-8 left-8 z-20">
            <Link to="/result" className="flex items-center space-x-2 text-white">
              <span className="text-sm font-semibold">BACK</span>
            </Link>
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
                // Fake loading then show camera
                setTimeout(() => {
                  setLoading(false);
                  setCameraActive(true);
                }, 2000);
              }}
              className="px-5 text-[#FCFCFC] font-semibold hover:text-gray-300"
            >
              ALLOW
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
