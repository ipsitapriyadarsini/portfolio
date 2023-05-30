import React from 'react'
import NavBarMenu from './headerComponents/NavbarMenu'
import HeroSection from './BodyComponents/HeroSection'
import AboutMe from "./BodyComponents/AboutMe"
import WorkExperience from "./BodyComponents/WorkExperience"
import Footer from "./Footer";
import LeftSidebar from "./Leftcomponents/LeftSidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <>
      <div className="body_container">
        <NavBarMenu />
        <HeroSection />
        <AboutMe />
        <WorkExperience />
        <Footer />
      </div>
      <LeftSidebar />
      <RightSidebar />
    </>
  )
}

export default Home