import React from "react";
import "./style.css";
const ButtonWithIconComponent = ({ text, onClick }) => {
  return (
    <button className="ButtonBody" onClick={onClick && onClick}>
      <p>{text}</p>
    </button>
  );
};

export default ButtonWithIconComponent;
