
import Image from "../../assets/images/desktop.jpg";
import { Bounce, Slide } from "react-awesome-reveal";

const HeroSection = ({ sectionsRef }) => {
  return (
    <>
      <div className="banner" ref={sectionsRef}>
        <img src={Image} width="100%" alt="hero_section" />
        <div className="heading_container">
          <Bounce>
            <h1 className="rainbow_text animate__bounce">
              Ipsita Priyadarsini
            </h1>
          </Bounce>
          <Slide>
            <h2 className="animate__slideInLeft">
              Brings ideas to life with code
            </h2>
          </Slide>
          <h4>
            {" "}
            Software Engineer . Full-stack Developer . Frontend Developer
          </h4>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
