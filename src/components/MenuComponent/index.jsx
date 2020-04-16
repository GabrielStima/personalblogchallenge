import React from "react";
import "./style.css";
import ButtonWithIconComponent from "../ButtonWithIconComponent";
import SearchIcon from "../../assets/img/search.svg";
import NewIcon from "../../assets/img/new.svg";
import BookIcon from "../../assets/img/book.svg";
import { Link } from "react-router-dom";

const MenuComponent = ({ renderFilter }) => {
  return (
    <div className="menuBar">
      <div className="logoSite">
        <Link to="/">
          <div>
            <img src={BookIcon} alt="principal icon" />
          </div>
          <div className="nameSite">Gabriel Stimamiglio</div>
        </Link>
      </div>
      <div className="menuOptions">
        <Link to="/latests-posts">
          <ButtonWithIconComponent text="Latest Posts" icon={NewIcon} />
        </Link>
        <ButtonWithIconComponent text="Search" icon={SearchIcon} />
      </div>
    </div>
  );
};

export default MenuComponent;
