import React from "react";
import Health from "../components/core/about/Health";
import Performance from "../components/core/about/Performance";
import Team from "../components/core/about/Team";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="bg-indigo-950">
      <Performance />
      <Team />
      <Health />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
