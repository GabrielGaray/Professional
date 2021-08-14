import React from "react";
import { Menu } from "@material-ui/icons";
import "./style.scss";

const MenuBar = () => {
  return (
    <div className="Menu-bar">
      <menu className="tabs">
        <a href="#test">Contacto</a>
        <a href="#presentation">Quien soy?</a>
        <a href="#test2">Formacion</a>
      </menu>
      <div className="hamburguer">
        <Menu />
      </div>
    </div>
  );
};

export default MenuBar;
