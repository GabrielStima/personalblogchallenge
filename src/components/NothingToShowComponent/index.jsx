import React from "react";
import "./style.css";

const NothingToShowComponent = ({ text = "Not found" }) => {
  return (
    <div className="dontHaveAnythingToShow">
      <p>{text}</p>
    </div>
  );
};

export default NothingToShowComponent;
