import React from "react";
import MenuBar from "./menuBar";
import "./style.scss";

const HeaderBar = () => {
  return (
    <div className="Header-bar">
      <div className="bar-logo">CELINA SAUCEDO</div>
      <div className="bar-menu">
        <MenuBar/>
      </div>
    </div>
  );
};

export default HeaderBar;
