import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import TestPage from "./components/Hero/TestPage";
import ThankYou from "./components/Hero/ThankYou";
import ResultPage from "./components/Hero/ResultsPage";
import CameraPage from "./components/Hero/CameraPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/camera" element={<CameraPage />} />
      </Routes>
    </>
  );
}

export default App;
