import "./assets/Sass/app.scss";
import "./assets/Sass/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import MyBlogs from "./Componets/Blogs/MyBlogs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/blog" element={<MyBlogs />} />
      </Routes>
    </>
  );
}

export default App;
