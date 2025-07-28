import ExperienceCard from "../../Utilities/reUsableComponents/ExperienceCard";
import { projectDetails } from "../../Utilities/ListArrays/Projrcts";

// eslint-disable-next-line react/prop-types
const PersonalProjects = ({ sectionsRef }) => {
  return (
    <>
      <div className="project-container" ref={sectionsRef}>
        <h1>Personal Projects</h1>
        <div className="experience_content">
          <ExperienceCard experienceList={projectDetails} bgColor={"black"} />
        </div>
      </div>
    </>
  );
};

export default PersonalProjects;
