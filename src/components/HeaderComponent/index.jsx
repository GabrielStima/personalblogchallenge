import React from "react";
import "./style.css";
import MenuComponent from "../MenuComponent";
import WelcomePhraseComponent from '../WelcomePhraseComponent';

const HeaderComponent = () => {
   return (
    <>
      <MenuComponent />
      <header className="headerBody">
      <WelcomePhraseComponent/>
      </header>
    </>
  );
};

export default HeaderComponent;
