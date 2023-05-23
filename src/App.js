import React from "react";
import "./App.css";
import "./assets/Sass/index.scss"
import NavbarMenu from "./Componets/NavbarMenu";
import LeftSidebar from "./Componets/Leftcomponents/LeftSidebar";
import RightSidebar from "./Componets/RightSidebar";
import Home from "./Componets/BodyComponents/Home";
import AboutMe from "./Componets/BodyComponents/AboutMe";
import WorkExperience from "./Componets/BodyComponents/WorkExperience";
import Footer from "./Componets/Footer";

const App = () => {
  return (
    <>
      <div className="body_container">
        <NavbarMenu />
        <Home />
        <AboutMe />
        <WorkExperience />
        <Footer />
      </div>
      <LeftSidebar />
      <RightSidebar />
    </>
  );
};

export default App;
