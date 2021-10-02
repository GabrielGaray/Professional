import React from "react";
import BoxContainer from "../../molecules/boxContainer";
import Title from "../../atoms/title";
import "./style.scss";

const ExhibitionModule = ({ items, title, className, sourceRoute }) => {
  return (
    <div className={`Exhibition-module ${className}`}>
      <Title name={title} className="white-yellow-underline" underline />
      <BoxContainer
        className="exhibition-container"
        items={items}
        sourceRoute={sourceRoute}
      />
    </div>
  );
};

export default ExhibitionModule;
