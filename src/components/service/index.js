import React, { useContext, useEffect, useState } from "react";
import { UIContext } from "../../context/uiContext";
import RequestManager from "../../firebase/requestManager";
import "./style.scss";
import ExhibitionModule from "../shared/organisms/exhibitionModule";

const Service = ({hidden}) => {
  const [services, setServices] = useState([]);

  const { setLoading } = useContext(UIContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await RequestManager.get("services");
      setServices(res);
      setLoading(false);
    })();
  }, [setServices, setLoading]);

  return (
    <div className="Service" id="service" hidden={hidden}>
      <ExhibitionModule
        title="Servicios"
        items={services}
        sourceRoute="service"
      />
    </div>
  );
};

export default Service;
