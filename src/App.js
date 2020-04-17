import React, { useState } from "react";
import Routes from "./routes";
import "./assets/css/global.css";
import HeaderComponent from "./components/HeaderComponent";
import FilterComponent from "./components/FilterComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isFilter, setIsFilter] = useState(false);
  const [transitionEffect, setTransitionEffect] = useState(false);
  const [transitionComplement, setTransitionComplement] = useState(true);

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

  return (
    <div className="App">
      <div className="bodyPage">
        <BrowserRouter>
          <HeaderComponent changeFilterStateCallback={changeFilterState} />
          <div className="bodyContent">
            <div
              className={`filterComponent ${
                isFilter && "showFilterComponent"
              } ${transitionComplement && "hiddenFilterComponent"}`}
            >
              <FilterComponent />
            </div>
            <div
              className={`routesRender ${
                transitionEffect && transitionComplement && "routesRenderDown"
              } ${
                !transitionEffect && !transitionComplement && "routesRenderUp"
              }`}
            >
              <Routes />
            </div>
          </div>
        </BrowserRouter>
      </div>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
