import React from "react";
import "./style.scss";

const Title = ({name,className}) => {
  return (
    <div className={`Title ${className}`}>
      <h2>{name}</h2>
      <hr />
    </div>
  );
};

export default Title;
