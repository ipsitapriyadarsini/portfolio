import React from 'react'
import Pooja from "../../assets/images/rmbpooja.png";

const AboutMe = () => {
  return (

    <>
      <div className="aboutme_container">
        <div className="content">
          <h2>ABOUT ME</h2>
          <br />
          <h3 style={{ textAlign: 'center' }}>A dedicated Front-end Developer based in Puri, Odisha, India</h3>
          <br />
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Typescript, Bootstrap, Tailwind,  SCSS and Material-UI.
            I excel in designing and maintaining responsive
            websites that offer a smooth user experience.</p>
          <p>
          My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
          I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
          <br />
        </div>
        <div className="ipsita">
          <img src={Pooja} alt="Ipsita" />
        </div>
      </div >
    </>
  )
}

export default AboutMe