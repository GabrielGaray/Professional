import React from "react";
import MenuBar from "./menuBar";
import "./style.scss";

const HeaderBar = () => {
  return (
    <div className="Header-bar">
      <div className="bar-logo">GABRIEL GARAY</div>
      <div className="bar-menu">
        <MenuBar/>
      </div>
    </div>
  );
};

export default HeaderBar;
