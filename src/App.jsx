import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/testing" element={<div>Testing Page</div>} />
        <Route path="/discover" element={<div>Discover Page</div>} />
      </Routes>
    </>
  );
}

export default App;
