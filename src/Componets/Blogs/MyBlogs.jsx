import { useNavigate } from "react-router-dom";
import Cards from "../../Utilities/reUsableComponents/Cards";

const MyBlogs = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/portfolio");
  };
  return (
    <>
      <section className="d-flex">
        <span
          className="blog-back-button"
          onClick={goBack}
          title="Go back to portfolio">
          ←
        </span>
        <h1 style={{ textAlign: "center" }}>Interview materials</h1>
      </section>
      <Cards />
    </>
  );
};

export default MyBlogs;
