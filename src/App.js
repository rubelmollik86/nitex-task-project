import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";

import About from "./component/About/About";
import Services from "./component/Services/Services";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
