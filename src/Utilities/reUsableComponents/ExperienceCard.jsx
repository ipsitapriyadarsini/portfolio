// eslint-disable-next-line react/prop-types
const ExperienceCard = ({ experienceList = [], bgColor = "white" }) => {
  if (!Array.isArray(experienceList)) {
    return <p>No experience data provided.</p>;
  }

  return experienceList.map((item) => (
    <div  key={item.projId}>
      <h4 className="exp-title">{item.projectname}</h4>
      <section className="card-conatainer animate__animated animate__pulse">
        <div
          className={`img-container ${
            bgColor === "black" ? "white-shadow" : ""
          }`}>
          <img src={item.image} alt={item.alt} />
        </div>
      </section>
    </div>
  ));
};

export default ExperienceCard;
