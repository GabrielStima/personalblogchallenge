import React, { useState } from "react";
import Routes from "./routes";
import "./assets/css/global.css";
import "./assets/css/app.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import FilterComponent from "./components/FilterComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isFilter, setIsFilter] = useState(false);
  const [transitionEffect, setTransitionEffect] = useState(false);
  const [transitionComplement, setTransitionComplement] = useState(true);
  const [filterObj, setFilterObj] = useState({ text: "", filterOption: "" });

  const changeFilterState = () => {
    if (!isFilter) {
      openEffect();
    } else {
      closeEffect();
    }
  };

  const openEffect = () => {
    setTransitionEffect(!transitionEffect);
    setTimeout(() => {
      setIsFilter(!isFilter);
    }, 500);
    setTimeout(() => {
      setTransitionComplement(!transitionComplement);
    }, 100);
  };

  const closeEffect = () => {
    setIsFilter(!isFilter);
    setTimeout(() => {
      setTransitionComplement(!transitionComplement);
    }, 190);
    setTimeout(() => {
      setTransitionEffect(!transitionEffect);
    }, 100);
  };

  const filterObjectMiddleware = (data) => {
    if (data) {
      setFilterObj(data);
    } else {
      return filterObj;
    }
  };

  return (
    <main className="App">
      <div className="bodyPage">
        <BrowserRouter>
          <HeaderComponent changeFilterStateCallback={changeFilterState} />
          <div className="bodyContent">
            <div
              className={`filterComponent ${
                isFilter && "showFilterComponent"
              } ${transitionComplement && "hiddenFilterComponent"}`}
            >
              <FilterComponent
                filterObjectMiddlewareCallback={filterObjectMiddleware}
              />
            </div>
            <div
              className={`routesRender ${
                transitionEffect && transitionComplement && "routesRenderDown"
              } ${
                !transitionEffect && !transitionComplement && "routesRenderUp"
              }`}
            >
              <Routes filterObjectMiddlewareCallback={filterObjectMiddleware} />
            </div>
          </div>
        </BrowserRouter>
      </div>
      <FooterComponent />
    </main>
  );
}

export default App;
