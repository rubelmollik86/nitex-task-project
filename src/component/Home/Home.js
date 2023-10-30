import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import ButterflySection from "../Butterfly/Butterfly";
import OurPackages from "../OurPackges/OurPackges";
import FounderSection from "../Founder/Founder";
import PressCoverage from "../PressCoverage/PressCoverage";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginPage/LoginPage";
import SignupForm from "../SgnUpPage/SgnUpPage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ButterflySection />
      <OurPackages />
      <FounderSection />
      <PressCoverage />
      <Testimonials />
      <Footer />
      <LoginForm />
      <SignupForm/>
    </div>
  );
};

export default Home;
