import React from "react";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = ({ sectionsRef }) => {
  return (
    <div className="work-experience-container" ref={sectionsRef}>
      <h1>Work Experience</h1>
      <div className="experience_content">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
