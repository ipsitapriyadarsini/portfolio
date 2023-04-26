import React from "react";
import ShareButton from "./ShareButton";

const LeftSidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
      <span class="lh_dec color-bg"></span>
        <div className="left-side-social">
          <ul>
            <li className="social-list" style={{ color: "#0e76a8" }}>
              <i class="fa fa-linkedin"></i>
            </li>
            <li className="social-list" style={{ color: "white" }}>
              <i class="fa fa-github"></i>
            </li>
            <li className="social-list" style={{ color: "red" }}>
              <i class="fa fa-youtube"></i>
            </li>

            <li className="social-list" style={{ color: "blue" }}>
              <i class="fa fa-facebook-f"></i>
            </li>
          </ul>
        </div>
      </aside>
     <ShareButton/>
    </>
  );
};

export default LeftSidebar;
