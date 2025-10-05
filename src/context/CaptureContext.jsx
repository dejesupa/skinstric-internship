import { createContext, useContext, useState, useEffect } from "react";

const CaptureContext = createContext();

export function CaptureProvider({ children }) {
  const [capturedImage, setCapturedImage] = useState(() => {
    return localStorage.getItem("capturedImage") || null;
  });

  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem("results");
    return saved ? JSON.parse(saved) : null;
  });

  // ✅ Save capturedImage to localStorage when it changes
  useEffect(() => {
    if (capturedImage) {
      localStorage.setItem("capturedImage", capturedImage);
    } else {
      localStorage.removeItem("capturedImage");
    }
  }, [capturedImage]);

  // ✅ Save results to localStorage when they change
  useEffect(() => {
    if (results) {
      localStorage.setItem("results", JSON.stringify(results));
    } else {
      localStorage.removeItem("results");
    }
  }, [results]);

  return (
    <CaptureContext.Provider
      value={{ capturedImage, setCapturedImage, results, setResults }}
    >
      {children}
    </CaptureContext.Provider>
  );
}

export function useCapture() {
  return useContext(CaptureContext);
}
