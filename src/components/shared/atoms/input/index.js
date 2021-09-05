import React from "react";
import "./style.scss";

const Input = ({ name, className, value, onChange }) => {
  return (
    <div className={`Input ${className}`}>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
