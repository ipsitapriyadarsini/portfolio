import React from "react";

const Button = (props) => {
  return (
    <div className="clickable-button" onClick={props.click}>
      <span className="m_right">
        <i className={props.icon} aria-hidden="true"></i>
      </span>
      {props.text}
    </div>
  );
};

export default Button;
