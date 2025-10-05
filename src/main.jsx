import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // make sure Tailwind CSS is imported here
import { CaptureProvider } from "./context/CaptureContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CaptureProvider> 
    <App />
    </CaptureProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
