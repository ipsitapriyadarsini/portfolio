/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { menuListItems } from "../../Utilities/ListArrays/MenuItems";

const Menu = ({ sectionsRef }) => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    if (sectionId === "blog") {
      navigate("/blog"); // Navigate to the blog page
      return;
    }

    if (sectionsRef[sectionId]?.current) {
      sectionsRef[sectionId].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="list-menu-items">
      <ul className="list_menu">
        {menuListItems.map((item) => (
          <li className="list_items" id={item.id} key={item.id}>
            <p
              className="list_item"
              onClick={() => handleScrollToSection(item.id)}>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
