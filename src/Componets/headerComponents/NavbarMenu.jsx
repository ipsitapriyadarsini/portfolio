import React, { useState } from "react";
import Menu from "./Menu";

const NavBarMenu = ({ sectionsRef }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <header>
        <div className="main-header">
          <section className="image_content">IPSITA'S</section>
          <ul className="contact_items">
            <li>
              <span className="lable">01. CALL:</span>
              <span className="value"> +91-8917338373</span>
            </li>
            <li>
              <span className="lable">02. WRITE:</span>
              <span className="value"> ipsitapriyadarsini2024@gmail.com</span>
            </li>
          </ul>
          <section
            className="menu_container"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
            {isShown && <Menu sectionsRef={sectionsRef} />}
          </section>
        </div>
        <div className="submain_header">
          <span className="portfolio">PORTFOLIO</span>
        </div>
      </header>
    </>
  );
};

export default NavBarMenu;
