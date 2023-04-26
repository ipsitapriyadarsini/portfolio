import React from "react";


const NavbarMenu = () => {
  return (
    <>
      <header>
        <div class="main-header">
          <section className="image_content">IPSITA'S</section>
          <section className="verticalBar">
          <hr />
          </section>
          <ul className="contact_items">
            <li>
              <span className="lable">01.  CALL:</span>
              <span className="value"> +91-8917338373</span>
            </li>
            <li>
              <span className="lable">02.  WRITE:</span>
              <span className="value"> ipsitacet2015@gmail.com</span>
            </li>
          </ul>

          <section className="menu_container">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </section>
        </div>
        <div className="submain_header">
          <span className="portfolio">PORTFOLIO</span>
        </div>
      </header>
    </>
  );
};

export default NavbarMenu;
