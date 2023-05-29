import React from "react";
import "./App.css";
import "./assets/Sass/index.scss";
import NavBarMenu from "./Componets/headerComponents/NavbarMenu";
import Home from "./Componets/BodyComponents/Home";
import AboutMe from "./Componets/BodyComponents/AboutMe";
import WorkExperience from "./Componets/BodyComponents/WorkExperience";
import Footer from "./Componets/Footer";
import LeftSidebar from "./Componets/Leftcomponents/LeftSidebar";
import RightSidebar from "./Componets/RightSidebar";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <div className="body_container">
        <Routes>
          <Route path="/" element={<NavBarMenu />} />
        </Routes>
        <Home />
        <AboutMe />
        <WorkExperience />
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<LeftSidebar />} />
      </Routes>
      <RightSidebar />
    </>
  );
};

export default App;
