import React from "react";
import BoxContainer from "../../molecules/boxContainer";
import Title from "../../atoms/title";
import "./style.scss";

const ModuleEComerce = ({ items, title, className }) => {
  return (
    <div className={`Module-e-comerce ${className}`}>
      <Title name={title} className="white-yellow-underline" />
      <BoxContainer className="e-comerce-container" items={items} />
    </div>
  );
};

export default ModuleEComerce;
