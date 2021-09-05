import React from "react";
import Button from "../../atoms/button";
import "./style.scss";

const ButtonContainer = ({ items, className }) => {
  return (
    <div className={`Button-container ${className}`}>
      {items?.length > 0 &&
        items.map((item, index) => <Button key={index} name={item.name} onClick={item.onClick} />)}
    </div>
  );
};

export default ButtonContainer;
