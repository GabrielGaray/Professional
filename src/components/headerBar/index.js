import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "./menuBar";
import "./style.scss";

const HeaderBar = () => {
  return (
    <div className="Header-bar">
      <Link className="bar-logo" to="/">GABRIEL GARAY</Link>
      <div className="bar-menu">
        <MenuBar/>
      </div>
    </div>
  );
};

export default HeaderBar;
