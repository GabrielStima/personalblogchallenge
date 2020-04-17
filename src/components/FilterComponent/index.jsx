import React, {useState} from 'react';
import './style.css';
import SearchIcon from '../../assets/img/search.svg';
import ArrowDropdown from '../../assets/img/down-arrow.svg';

export default function FilterComponent() {
  const [arrowDirection, setArrowDirection] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Title");

  const arrowDirectionWatch = () => {
    return !arrowDirection ? "arrowUp" : "arrowDown";
  }

  const currentFilterChange = (string) => {
    setCurrentFilter(string);
  }

  return (
    <>
    <span className="filterTitle">Filter</span>
    <div className="filterBody">
      <div className="dropdown" onClick={() => setArrowDirection(!arrowDirection)}>
        {currentFilter}
        <div className={`dropdown-content ${arrowDirection && "active"}`}>
          <div onClick={()=>currentFilterChange("Title")}>Title</div>
          <div onClick={()=>currentFilterChange("Author")}>Author</div>
        </div>
        <img src={ArrowDropdown} alt="arrowDropdown" className={arrowDirectionWatch()}/>
      </div>
      <input type="text" className="inputFilter"/>
      <div className="iconSearch">
        <img src={SearchIcon} alt="search icon"/>
      </div>
    </div>
    </>
  );
}
