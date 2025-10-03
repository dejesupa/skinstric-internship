import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import TestPage from "./components/Hero/TestPage";
import ThankYou from "./components/Hero/ThankYou";
import CapturePage from "./components/Hero/CapturePage";
import DemographicsPage from "./components/Hero/DemographicsPage";
import SummaryPage from "./components/Hero/SummaryPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/testing" element={<TestPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/capture" element={<CapturePage />} />
        {/* <Route path="/camera" element={<CameraPage />} /> */}
        <Route path="/demographics" element={<DemographicsPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </>
  );
}

export default App;
