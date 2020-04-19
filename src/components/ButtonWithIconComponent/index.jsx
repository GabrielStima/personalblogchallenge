import React from "react";
import "./style.css";
const ButtonWithIconComponent = ({
  text,
  icon,
  alt = "image icon",
  onClick,
}) => {
  return (
    <button className="ButtonBody" onClick={onClick && onClick}>
      <figure>
        <img src={icon} alt={alt} />
      </figure>
      <p>{text}</p>
    </button>
  );
};

export default ButtonWithIconComponent;
