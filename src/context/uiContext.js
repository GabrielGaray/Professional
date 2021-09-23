import React, { createContext, useState } from "react";
import ReactLoading from "react-loading";

export const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <UIContext.Provider value={{ loading, setLoading }}>
      <ReactLoading
        className="loading"
        hidden={!loading}
        type={"cylon"}
        color={"#ffffff"}
        height={100}
        width={100}
      />
      <div className={loading ? "disabled" : ""}>{children}</div>
    </UIContext.Provider>
  );
};
