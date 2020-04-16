import React from 'react';
import './style.css'
const ButtonWithIconComponent = ({text, icon, onClick}) => {
  return (
    <div className="ButtonBody" onClick={onClick && onClick}>
        <img src={icon} alt=""/>
        {text}
    </div>
  );
};

export default ButtonWithIconComponent;
