import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import camera from "../../assets/camera.svg";
import gallery from "../../assets/gallery.svg";
import takePictureIcon from "../../assets/takePictureIcon.png";

export default function ResultPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
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
    navigate("/demographics", { state: { capturedImage } });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-center">
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
            className="relative flex flex-col items-center cursor-pointer z-10"
            onClick={() => setShowModal(true)}
          >
            <img src={camera} alt="Camera Icon" />
          </button>

          {/* Gallery Option */}
          <button
            className="relative flex flex-col items-center cursor-pointer z-10"
            onClick={() => document.getElementById("galleryInput").click()}
          >
            <img src={gallery} alt="Gallery Icon" />
          </button>
        </div>
      )}

      {/* Loading State */}
      {loading && !cameraActive && (
        <div className="h-[85vh] flex flex-col items-center justify-center relative">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] border border-dotted border-gray-300 animate-spin-slow"></div>
            <div className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] border border-dotted border-gray-300 animate-spin-slower"></div>
            <div className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] border border-dotted border-gray-300 animate-spin-slowest"></div>
            <img
              src={camera}
              alt="Camera Icon"
              className="w-[100px] h-[100px] md:w-[136px] md:h-[136px] animate-pulse"
            />
          </div>
          <p className="mt-6 font-semibold text-sm md:text-base animate-pulse">
            SETTING UP CAMERA ...
          </p>
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
                }, 1500);
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
