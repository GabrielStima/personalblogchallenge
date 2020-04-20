import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ButtonWithLinkComponent = ({ text = "Button", link, onClick }) => {
  return (
    <>
      {link ? (
        <Link data-testid="buttonLink" to={link}>
          <button
            className="ButtonBody"
            data-testid="buttonBody"
            onClick={onClick && onClick}
          >
            <p data-testid="buttonText">{text}</p>
          </button>
        </Link>
      ) : (
        <button
          className="ButtonBody"
          data-testid="buttonBody"
          onClick={onClick && onClick}
        >
          <p data-testid="buttonText">{text}</p>
        </button>
      )}
    </>
  );
};

export default ButtonWithLinkComponent;
