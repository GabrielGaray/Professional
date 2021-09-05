import React from "react";
import "./style.scss";

const Button = ({ name, className, onClick }) => {
  return (
    <div className={`Button ${className}`}>
      <button onClick={onClick}> {name} </button>
    </div>
  );
};

export default Button;
