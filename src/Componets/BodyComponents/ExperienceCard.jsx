import React from "react";
import { experinceDetails } from "../../Utilities/ListArrays/ExperienceList";

const ExperienceCard = () => {
  return experinceDetails.map((item) => (
    <div className="d-flex" key={item.projId}>
      <h4 className="exp-title">{item.projectname}</h4>
      <section className="card-conatainer animate__animated animate__pulse">
        <div className="img-container">
          <img src={item.image} alt={item.alt} />
        </div>
      </section>
    </div>
  ));
};

export default ExperienceCard;
