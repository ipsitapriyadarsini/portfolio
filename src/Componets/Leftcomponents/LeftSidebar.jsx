import React from "react";
import ShareButton from "./ShareButton";
import { socialMediaInfo } from "../../Utilities/ListArrays/SocialMedia";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
        <span className="lh_dec color-bg"></span>
        <div className="left-side-social">
          <ul>
            {socialMediaInfo.map((item, i) => (
              <Link to={item.path} key={i} target="_blank">
                <li className="social-list" style={{ color: item.color }}>
                  <i className={item.icon}></i>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </aside>
      <ShareButton />
    </>
  );
};

export default LeftSidebar;
