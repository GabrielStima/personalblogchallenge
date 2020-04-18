import React from 'react';
import './style.css';

const NothingToShow = ({text = "Not found"}) => {
  return (
  <div className="dontHaveAnythingToShow">{text}</div>
  );
};

export default NothingToShow;
