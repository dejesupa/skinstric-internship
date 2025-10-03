// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import takePictureIcon from "../../assets/takePictureIcon.png";

// export default function CameraPage() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null); // keep track of camera stream
//   const [error, setError] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   // Start camera
//   const startCamera = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         setError(null);
//         streamRef.current = stream;
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       })
//       .catch((err) => {
//         console.error("Camera access denied:", err);
//         setError(
//           "Camera access was denied. Please allow it in your browser settings."
//         );
//       });
//   };

//   // Stop camera
//   const stopCamera = () => {
//     if (streamRef.current) {
//       streamRef.current.getTracks().forEach((track) => track.stop());
//       streamRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startCamera();
//     return () => stopCamera(); 
//   }, []);

//   const handleCapture = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     const imageData = canvas.toDataURL("image/png");
//     setCapturedImage(imageData);
//   };

//   const handleRetake = () => {
//     setCapturedImage(null);

//     if (!streamRef.current) {
//       startCamera();
//     }
//   };

//   const handleUsePhoto = () => {
//     alert("Photo selected! (Replace with upload or next step)");
//     stopCamera();
//   };

//   return (
//     <div className="h-[90vh] w-screen relative bg-gray-900 flex flex-col justify-center items-center">
//       {/* Video Feed */}
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-[-1]"
//       />

//       {/* Captured Image overlay (only shown when captured) */}
//       <img
//         src={capturedImage || ""}
//         alt="Captured"
//         className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
//           capturedImage ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       />

//       {/* Hidden Canvas */}
//       <canvas ref={canvasRef} className="hidden" />

//       {/* Error Message */}
//       {error && (
//         <div className="flex flex-col items-center justify-center text-white text-center px-6">
//           <p className="text-lg font-semibold mb-4">{error}</p>
//           <p className="text-sm text-gray-300">
//             Go to your browser’s camera settings and allow access for{" "}
//             <b>localhost:5173</b>.
//           </p>
//         </div>
//       )}

//       {/* Take Picture Button */}
//       {!error && !capturedImage && (
//         <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
//           <div className="font-semibold text-sm tracking-tight text-white hidden sm:block">
//             TAKE PICTURE
//           </div>
//           <img
//             src={takePictureIcon}
//             alt="Take Picture"
//             className="w-16 h-16 cursor-pointer transform hover:scale-105 transition"
//             onClick={handleCapture}
//           />
//         </div>
//       )}

//       {/* After Capture: Retake / Use Photo */}
//       {capturedImage && (
//         <div className="absolute bottom-20 flex flex-col items-center z-20">
//           <p className="text-white font-semibold text-lg mb-4">GREAT SHOT!</p>
//           <div className="flex space-x-6">
//             <button
//               onClick={handleRetake}
//               className="px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
//             >
//               Retake
//             </button>
//             <button
//               onClick={handleUsePhoto}
//               className="px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-700"
//             >
//               Use This Photo
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Tips Overlay (bottom center) */}
//       <div className="absolute bottom-24 sm:bottom-32 left-0 right-0 text-center z-40 pointer-events-none">
//         <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
//           TO GET BETTER RESULTS MAKE SURE TO HAVE
//         </p>
//         <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
//           <p>◇ NEUTRAL EXPRESSION</p>
//           <p>◇ FRONTAL POSE</p>
//           <p>◇ ADEQUATE LIGHTING</p>
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="absolute bottom-8 left-8 z-20">
//         <Link to="/test">
//           <button className="group inline-flex items-center gap-3 text-sm font-semibold text-white">
//             <div className="relative flex items-center justify-center w-[40px] h-[40px] border border-white rotate-45">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="absolute rotate-[-45deg] w-5 h-5 text-white"
//                 fill="currentColor"
//               >
//                 <path d="M16 5v14L5 12z" />
//               </svg>
//             </div>
//             <span>BACK</span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
