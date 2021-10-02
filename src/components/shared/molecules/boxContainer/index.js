import React from "react";
import Box from "../../atoms/box";
import "./style.scss";

const BoxContainer = ({ items, className, sourceRoute }) => {
  return (
    <div className={`Box-container ${className}`}>
      {items?.length > 0 &&
        items.map((item, index) => (
          <div className="box-parent" key={index}>
            <div className="box-child">
              <Box
                data={item}
                link={`/${sourceRoute}/${item?.id}`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoxContainer;
