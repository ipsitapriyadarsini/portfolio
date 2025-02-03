import { useRef } from "react";
import NavBarMenu from "./headerComponents/NavbarMenu";
import HeroSection from "./BodyComponents/HeroSection";
import AboutMe from "./BodyComponents/AboutMe";
import WorkExperience from "./BodyComponents/WorkExperience";
import Footer from "./Footer";
import LeftSidebar from "./Leftcomponents/LeftSidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    // project: useRef(null),
    contact: useRef(null),
  };
  return (
    <>
      <div className="body_container">
        <NavBarMenu sectionsRef={sectionsRef} />
        <HeroSection sectionsRef={sectionsRef.home} />

        <AboutMe sectionsRef={sectionsRef.about} />

        <WorkExperience sectionsRef={sectionsRef.experience} />

        <Footer sectionsRef={sectionsRef.contact} />
      </div>
      <LeftSidebar />
      <RightSidebar />
    </>
  );
};

export default Home;
