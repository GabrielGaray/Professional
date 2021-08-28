import React, { useEffect, useState } from "react";
import ModuleEComerce from "../shared/organisms/moduleEComerce";
import resServices from "./../../mock/files/services.json";
import "./style.scss";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const res = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resServices);
      }, 1000);
    });
    res.then((result) => {
      setServices(result);
    });
  }, []);

  return (
    <div className="Service" id="service">
      <ModuleEComerce title="Servicios" items={services} />
    </div>
  );
};

export default Service;
