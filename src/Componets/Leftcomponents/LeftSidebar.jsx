import React from "react";
import ShareButton from "./ShareButton";

const LeftSidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
      <span className="lh_dec color-bg"></span>
        <div className="left-side-social">
          <ul>
            <li className="social-list" style={{ color: "#0e76a8" }}>
              <i className="fa fa-linkedin"></i>
            </li>
            <li className="social-list" style={{ color: "white" }}>
              <i className="fa fa-github"></i>
            </li>
            <li className="social-list" style={{ color: "red" }}>
              <i className="fa fa-youtube"></i>
            </li>

            <li className="social-list" style={{ color: "blue" }}>
              <i className="fa fa-facebook-f"></i>
            </li>
          </ul>
        </div>
      </aside>
     <ShareButton/>
    </>
  );
};

export default LeftSidebar;
