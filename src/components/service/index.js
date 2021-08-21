import { Web } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Box from "../shared/box";
import Title from "../shared/title";
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
    res.then(result =>{
      setServices(result);
    })
  }, []);

  return (
    <div className="Service" id="service">
      <Title name="Servicios" className="white-yellow-underline" />
      <div className="service-container">
        {services?.length > 0 &&
          services.map((service) => <Box data={service} height="250px"/>)}
      </div>
    </div>
  );
};

export default Service;
