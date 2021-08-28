import React from "react";
import "./style.scss";

const Title = ({ name, className, underline }) => {
  return (
    <div className={`Title ${className}`}>
      <h2>{name}</h2>
      <hr hidden={!underline} />
    </div>
  );
};

export default Title;
