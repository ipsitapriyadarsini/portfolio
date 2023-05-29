import React from "react";
import "./App.css";
import "./assets/Sass/index.scss";

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
          <Route path="/" element={<></> }/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experienxe" element={<WorkExperience />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<LeftSidebar />} />
        <Route path="/" element={<RightSidebar />} />
      </Routes>
    </>
  );
};

export default App;
