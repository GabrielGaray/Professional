import React from "react";
import "./style.scss";

const Box = ({ data, className, width, height }) => {
  return (
    <div
      className={`Box ${className}`}
      style={{
        backgroundImage: 
        `linear-gradient(
            to bottom,
            transparent,
            rgba(0,0,0,0.2085609243697479) ,
            rgba(0,0,0,0.3085609243697479) ,
            rgba(0,0,0,0.2085609243697479) ,
            transparent),
        url(${data?.image})`,
        width: `${width}`,
        height: `${height}`,
      }}
    >
      <h3>{data?.name}</h3>
    </div>
  );
};

export default Box;
