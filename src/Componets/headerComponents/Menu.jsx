import React from "react";
import { menuListItems } from "../../Utilities/ListArrays/MenuItems";

const Menu = ({ sectionsRef }) => {
  const handleScrollToSection = (sectionId) => {
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
