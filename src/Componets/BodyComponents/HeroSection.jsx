import React from "react";
import Image from "../../assets/images/desktop.jpg";


const HeroSection = () => {
  return (
    <>
      <div className="banner">
        <img src={Image} width="100%" alt="hero_section" />
        <div className="heading_container">
          <h1 className="rainbow_text">
            Ipsita Priyadarsini
          </h1>
          <h2>Brings ideas to life with code</h2>
          <h4> Software Engineer.FrontEnd Developer.ReactJs Developer </h4>
        </div>
      </div>

    </>
  );
};

export default HeroSection;
