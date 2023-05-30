import React from "react";
import "./App.css";
import "./assets/Sass/index.scss";
import Home from "./Componets/Home";

import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
