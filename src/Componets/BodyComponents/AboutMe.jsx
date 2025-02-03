import Pooja from "../../assets/images/rmbpooja.png";
import Button from "../../Utilities/reUsableComponents/Button";
import resume from "../../assets/resume.pdf";

const AboutMe = ({sectionsRef}) => {
  const resumeDownload = async () => {
    const aTag = document.createElement("a");
    aTag.href = resume;
    aTag.download = "Ipsita's resume.pdf";
    aTag.click();
  };

  return (
    <div className="aboutme_container" ref={sectionsRef}>
      <div className="content">
        <h2>ABOUT ME</h2>
        <br />
        <h3 style={{ textAlign: "center" }}>
          A dedicated Full-Stack Developer based in Bengaluru, Karnataka, India
        </h3>
        <br />
        <p>
          As a Developer, I possess a versatile skill set encompassing front-end
          and back-end technologies, including HTML, CSS, JavaScript, React Js,
          TypeScript, Node.js, Express, MongoDB, SQL, Bootstrap, Tailwind, SCSS,
          and Material-UI. I excel in building and maintaining responsive
          websites and web applications that deliver seamless user experiences.
        </p>
        <br />
        <p>
          My expertise lies in creating dynamic, interactive interfaces with
          clean, optimized code on the front end while designing robust,
          scalable APIs and database architectures on the back end. I am a team
          player who thrives in collaborating with cross-functional teams to
          deliver exceptional software solutions using modern development tools
          and methodologies.
        </p>

        <Button
          text="Download Resume"
          icon="fa fa-download"
          click={resumeDownload}
        />
      </div>
      <div className="ipsita">
        <img src={Pooja} alt="Ipsita" />
      </div>
    </div>
  );
};

export default AboutMe;
