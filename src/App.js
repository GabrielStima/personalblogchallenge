import React, { useState } from "react";
import Routes from "./routes";
import "./assets/css/global.css";
import HeaderComponent from "./components/HeaderComponent";
import FilterComponent from "./components/FilterComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isFilter, setIsFilter] = useState(false);
  const [transitionEffect, setTransitionEffect] = useState(false);

  const changeFilterState = () => {
    if (!isFilter) {
      setTransitionEffect(!transitionEffect);
      setTimeout(() => {
        setIsFilter(!isFilter);
      }, 500);
    } else {
      setIsFilter(!isFilter);
      setTimeout(() => {
        setTransitionEffect(!transitionEffect);
      }, 500);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent changeFilterStateCallback={changeFilterState} />
        <div className="bodyPage">
          <div
            className={`filterComponent ${isFilter && "showFilterComponent"}`}
          >
            <FilterComponent />
          </div>
          <div
            className={`routesRender ${transitionEffect && "routesRenderDown"}`}
          >
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
