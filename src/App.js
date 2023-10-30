import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Slider from "./component/Slider/Slider";
import ButterflySection from "./component/Butterfly/Butterfly";
import OurPackges from "./component/OurPackges/OurPackges";
import FounderSection from "./component/Founder/Founder";
import PressCoverage from "./component/PressCoverage/PressCoverage";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <ButterflySection />
      <OurPackges />
      <FounderSection />
      <PressCoverage />
      <Routes path="/" element={<Home />}>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
