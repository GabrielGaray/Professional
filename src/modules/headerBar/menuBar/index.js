import React from 'react';
import { Menu } from '@material-ui/icons';
import "./style.scss"

 const MenuBar =()=> {
    return (
        <div className="Menu-bar">
            <div className="tabs"></div>
            <Menu/>
            <div className="hamburguer"></div>
        </div>
    )
}

export default MenuBar;
