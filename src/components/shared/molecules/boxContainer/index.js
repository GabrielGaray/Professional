import React from "react";
import Box from "../../atoms/box";
import "./style.scss";

const BoxContainer = ({items,height="250px",className}) => {
  return (
    <div className={`Box-container ${className}`}>
        {items?.length > 0 &&
          items.map((item, index) => (
            <Box
              key={index}
              data={item}
              height={height}
              link={`/product/${item?._id}`}
            />
          ))}
    </div>
  );
};

export default BoxContainer;
