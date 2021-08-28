import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Box = ({ data, className, width, height, onClick, link, }) => {
  return (
    <Link
      to={link && link}
      style={{ color: "inherit", textDecoration: "inherit" }}
      >
      <div
        className={`Box ${className}`}
        style={{
          backgroundImage: `linear-gradient(
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
        onClick={onClick}
      >
        <h3>{data?.name}</h3>
      </div>
    </Link>
  );
};

export default Box;
