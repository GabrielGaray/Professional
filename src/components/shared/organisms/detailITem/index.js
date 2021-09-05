import React from "react";
import Title from "../../atoms/title";
import "./style.scss";

const DetailItem = ({ className, item,content }) => {
  return (
    <div className={`Detail-item ${className}`}>
      <Title name={item?.name} className="black" />
      {content && content}
    </div>
  );
};

export default DetailItem;
