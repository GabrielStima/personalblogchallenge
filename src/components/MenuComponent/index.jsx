import React, {useEffect} from "react";
import "./style.css";
import ButtonWithIconComponent from "../ButtonWithIconComponent";
import SearchIcon from "../../assets/img/search.svg";
import NewIcon from "../../assets/img/new.svg";
import BookIcon from "../../assets/img/book.svg";
import { Link, useHistory } from "react-router-dom";

const MenuComponent = ({ changeFilterStateCallback }) => {
  const history = useHistory();

  useEffect(()=>{
    const regex = new RegExp('/post/');

    if(regex.test(window.location.pathname)){
      history.push('/');
    }

  }, [changeFilterStateCallback,history])

  return (
    <nav className="menuBar">
      <div className="logoSite">
        <Link to="/">
          <figure>
            <img src={BookIcon} alt="Principal icon" />
          </figure>
          <p className="nameSite">Gabriel Stimamiglio</p>
        </Link>
      </div>
      <div className="menuOptions">
        <Link to="/latests-posts">
          <ButtonWithIconComponent text="Latest Posts" alt="New posts icon" icon={NewIcon} />
        </Link>
        <ButtonWithIconComponent text="Filter" icon={SearchIcon} alt="Open/Close filter" onClick={changeFilterStateCallback} /> 
      </div>
    </nav>
  );
};

export default MenuComponent;
