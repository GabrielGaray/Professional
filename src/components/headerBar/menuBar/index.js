import React from "react";
import { Menu } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./style.scss";
import { useState } from "react";

const MenuBar = () => {
  const history = useHistory();
  const [pathOrigin, setPathOrigin] = useState("#")

  const handleBuildRoute = (e) => {
    if (history.location.pathname==="/") {
      return setPathOrigin("#")
    }
    return setPathOrigin("/home/")
  };

  return (
    <div className="Menu-bar">
      <ul className="tabs">
        <li>
          <a href={`${pathOrigin}presentation`} onClick={handleBuildRoute}>
            Quien Soy?
          </a>
        </li>
        <li>
          <a href={`${pathOrigin}product`} onClick={handleBuildRoute}>
            Productos
          </a>
        </li>
        <li>
          <a href={`${pathOrigin}service`} onClick={handleBuildRoute}>
            Servicios
          </a>
        </li>
      </ul>
      <div className="hamburguer">
        <Menu />
      </div>
    </div>
  );
};

export default MenuBar;
