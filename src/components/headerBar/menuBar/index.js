import React from "react";
import { Menu } from "@material-ui/icons";
import "./style.scss";

const MenuBar = () => {
  return (
    <div className="Menu-bar">
      <ul className="tabs">
        <li>
          <a href="#presentation">Quien Soy?</a>
        </li>
        <li>
          <a href="#product">Productos</a>
        </li>
      </ul>
      <div className="hamburguer">
        <Menu />
      </div>
    </div>
  );
};

export default MenuBar;
