import React from "react";
import "./style.css";

const SpinnerLoaderComponent = () => {
  return (
    <div className="spinnerLoaderDiv">
      <div data-testid="spinnerLoader" className="spinnerLoader" />
    </div>
  );
};

export default SpinnerLoaderComponent;
