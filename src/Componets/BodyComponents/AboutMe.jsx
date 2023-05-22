import React from 'react'
import Pooja from "../../assets/images/pooja.jpg";

const AboutMe = () => {
  return (

    <>
      <div className="aboutme_container">
        <div className="content">
          <h2>About Me</h2>
          <p>Some content goes here.</p>
        </div>
        <img src={Pooja} alt="Ipsita" className="ipsita" />
      </div>

    </>
  )
}

export default AboutMe