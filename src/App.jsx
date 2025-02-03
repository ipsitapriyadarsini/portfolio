import "./assets/Sass/app.scss";
import "./assets/Sass/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
