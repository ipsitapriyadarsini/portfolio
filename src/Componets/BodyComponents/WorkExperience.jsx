import ExperienceCard from "../../Utilities/reUsableComponents/ExperienceCard";
import { experinceDetails } from "../../Utilities/ListArrays/ExperienceList";

// eslint-disable-next-line react/prop-types
const WorkExperience = ({ sectionsRef }) => {
  return (
    <div className="work-experience-container" ref={sectionsRef}>
      <h1>Work Experience</h1>
      <div className="experience_content">
        <ExperienceCard experienceList={experinceDetails} />
      </div>
    </div>
  );
};

export default WorkExperience;
