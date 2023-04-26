import React from "react";
import Image from "../../assets/images/desktop.jpg";
import Pooja from "../../assets/images/pooja.jpg";

const Home = () => {
  return (
    <>
      <div className="banner">
        <img src={Image} width="100%" />
        <div className="heading_container">
          <h1>
            Hi,
            <br /> I am Ipsita,
          </h1>
          <h2> I design and build user interfaces. </h2>
        </div>
      </div>
      <img src={Pooja} alt="Ipsita" className="ipsita" />
    </>
  );
};

export default Home;
