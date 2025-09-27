import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import TestPage from "./components/Hero/TestPage";
import ThankYou from "./components/Hero/ThankYou";
import ResultPage from "./components/Hero/ResultsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/testing" element={<TestPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
