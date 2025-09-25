// import React from "react";
// import { Link } from "react-router-dom";

// const SideButton = ({ side = "left", label, link, debug = false }) => {
//   const isLeft = side === "left";

//   return (
//     <div
//       className={`
//         hidden lg:block fixed top-1/2 -translate-y-1/2
//         w-[500px] h-[500px] transition-opacity duration-500 ease-in-out opacity-100
//         ${debug
//           ? isLeft
//             ? "left-10"
//             : "right-10"
//           : isLeft
//             ? "left-[calc(-53vw)] xl:left-[calc(-50vw)]"
//             : "right-[calc(-53vw)] xl:right-[calc(-50vw)]"}
//       `}
//     >
//       <div className="relative w-full h-full">
//         {/* Background diamond */}
//         <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>

//         {/* Button */}
//         <Link to={link}>
//           <button
//             className={`
//               group inline-flex items-center justify-center gap-4
//               whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C]
//               cursor-pointer h-9 px-3 py-1
//               absolute top-1/2 -translate-y-1/2
//               ${isLeft
//                 ? debug
//                   ? "right-0 translate-x-0"
//                   : "right-0 translate-x-1/5 xl:translate-x-1/6 [@media(width>=1920px)]:translate-x-1/20"
//                 : debug
//                   ? "left-0 -translate-x-0"
//                   : "left-0 -translate-x-1/5 xl:-translate-x-1/6 [@media(width>=1920px)]:-translate-x-1/20"}
//             `}
//           >
//             {/* Diamond + Arrow */}
//             <div className="w-[30px] h-[30px] border border-black rotate-45 flex items-center justify-center group-hover:scale-110 duration-300">
//               <svg
//                 viewBox="0 0 24 24"
//                 width="12"
//                 height="12"
//                 className={`fill-black ${isLeft ? "rotate-180" : ""}`}
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>

//             {/* Label */}
//             <span>{label}</span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SideButton;
