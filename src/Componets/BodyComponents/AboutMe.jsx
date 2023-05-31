import React from 'react'
import Pooja from "../../assets/images/rmbpooja.png";

const AboutMe = () => {
  return (

    <>
      <div className="aboutme_container">
        <div className="content">
          <h2>ABOUT ME</h2>
          <br />
          <h3>A dedicated Front-end Developer based in Puri, Odisha, India</h3>
          <br />
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Typescript, Bootstrap, Tailwind,  SCSS and Material-UI.
            I excel in designing and maintaining responsive
            websites that offer a smooth user experience.</p>
          My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
          I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          <br />
          <p> Feel free to personalize the template based on your own experiences, skills, and personality. Remember to keep it concise, engaging, and focused on highlighting your strengths as a React front-end developer. Good luck with your portfolio!</p>
        </div>
        <div className="ipsita">
          <img src={Pooja} alt="Ipsita" />
        </div>
      </div >
    </>
  )
}

export default AboutMe