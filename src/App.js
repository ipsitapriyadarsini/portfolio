import React from "react";
import "./App.css";
import "./assets/Sass/index.scss"
import NavbarMenu from "./Componets/NavbarMenu";
import LeftSidebar from "./Componets/Leftcomponents/LeftSidebar";
import RightSidebar from "./Componets/RightSidebar";
import Home from "./Componets/BodyComponents/Home";

const App = () => {
  return (
    <>
      <div className="body_container">
        <NavbarMenu />
        <Home />
      </div>
      <LeftSidebar />
      <RightSidebar />
    </>
  );
};

export default App;
