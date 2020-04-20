import React, { useState, useEffect } from "react";
import "./style.css";
import ButtonWithIconComponent from "../ButtonWithIconComponent";
import BookIcon from "../../assets/img/book.svg";
import MenuIconWhite from "../../assets/img/menuIconWhite.svg";
import MenuIconBlack from "../../assets/img/menuIconBlack.svg";
import { Link, useHistory } from "react-router-dom";

const MenuComponent = ({ changeFilterStateCallback }) => {
  const history = useHistory();
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  useEffect(() => {
    const regex = new RegExp("/post/");

    if (regex.test(window.location.pathname)) {
      history.push("/");
    }
  }, [changeFilterStateCallback, history]);

  return (
    <>
      <div className={`mobileLogo ${collapseSidebar && "mobileLogoFixed"}`} onClick={() => setCollapseSidebar(!collapseSidebar)}>
        <figure>
          <img src={!collapseSidebar ? MenuIconWhite : MenuIconBlack} alt="Principal icon" />
        </figure>
      </div>

      <nav className={`menuBar ${collapseSidebar && 'openSidebar'}`}>
        <div className="websiteLogo">
          <figure>
            <img src={BookIcon} alt="Principal icon" />
          </figure>
          <p className="nameSite">Gabriel Stimamiglio</p>
        </div>
        <div className="menuOptions">
          <Link to="/">
            <ButtonWithIconComponent text="Home" />
          </Link>
          <Link to="/latests-posts">
            <ButtonWithIconComponent text="Latest Posts" />
          </Link>
          <ButtonWithIconComponent
            text="Filter"
            onClick={changeFilterStateCallback}
          />
        </div>
      </nav>
    </>
  );
};

export default MenuComponent;
