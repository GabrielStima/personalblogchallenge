import React from "react";
import "./style.css";
import MenuComponent from "../MenuComponent";
import WelcomePhraseComponent from "../WelcomePhraseComponent";

const HeaderComponent = ({ changeFilterStateCallback }) => {
  return (
    <div data-testid="header">
      <MenuComponent changeFilterStateCallback={changeFilterStateCallback} />
      <header className="headerBody">
        <WelcomePhraseComponent />
      </header>
    </div>
  );
};

export default HeaderComponent;
