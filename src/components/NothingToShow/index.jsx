import React from "react";
import "./style.css";

const NothingToShow = ({ text = "Not found" }) => {
  return (
    <div className="dontHaveAnythingToShow">
      <p>{text}</p>
    </div>
  );
};

export default NothingToShow;
