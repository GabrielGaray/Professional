import React from "react";
import Title from "../../atoms/title";
import "./style.scss";

const DetailEComerce = ({ className, item }) => {
  return (
    <div className={`Detail-e-comerce ${className}`}>
      <Title name={item?.name} className="black" />
      <p>{item?.detail}</p>
      <label>{item?.price}</label>
    </div>
  );
};

export default DetailEComerce;
