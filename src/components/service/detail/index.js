import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import RequestManager from "../../../firebase/requestManager";
import Button from "../../shared/atoms/button";
import DetailItem from "../../shared/organisms/detailITem";
import { UIContext } from "../../../context/uiContext";
import { useHistory, useParams } from "react-router";

import "./style.scss";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const { setLoading } = useContext(UIContext);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await RequestManager.get("services", [
        firebase.firestore.FieldPath.documentId(),
        "==",
        id,
      ]);
      setService({ ...res, amount: 0 });
      setLoading(false);
    })();
  }, [id, setLoading]);

  const handleAlert = () => {
    let msj = window.prompt(
      "Deja tu email para contactarnos",
      "Email o Telefono"
    );
    if (msj === "Email o Telefono") return handleAlert();
    window.alert(
      `Se ha enviado con exito el mensaje, en unos minutos va ser contactado`
    );
    return history.push("/");
  };

  return (
    <div className="Service-detail">
      <div
        className="service-detail-img"
        style={{
          backgroundImage: `linear-gradient(
        to bottom,
        rgba(0,0,0,0.3085609243697479) ,
        transparent,
        transparent),
    url(${service?.image})`,
        }}
      ></div>
      <DetailItem
        className="service-detail-container"
        item={service}
        content={
          <React.Fragment>
            <p>{service?.detail}</p>
            <Button
              className={"buy-button"}
              name="Contactar"
              onClick={() => handleAlert()}
            />
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ServiceDetail;
