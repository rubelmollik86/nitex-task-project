import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";

import About from "./component/About/About";
import Services from "./component/Services/Services";
import ContactUs from "./component/ContactUs/ContactUs";
import LoginForm from "./component/LoginPage/LoginPage";
import SignupForm from "./component/SgnUpPage/SgnUpPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={< ContactUs />} />
        <Route path="/login" element={< LoginForm />} />
        <Route path="/signup" element={< SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
