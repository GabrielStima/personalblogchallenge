import React from "react";
import Routes from "./routes";
import "./assets/css/global.css";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
