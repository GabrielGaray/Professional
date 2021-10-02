import React, { useContext, useEffect, useState } from "react";
import ExhibitionModule from "../shared/organisms/exhibitionModule";
import RequestManager from "../../firebase/requestManager";
import { UIContext } from "../../context/uiContext";

import "./style.scss";

const Product = ({ hidden }) => {
  const { setLoading } = useContext(UIContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await RequestManager.get("products");
      setProducts(res);
      setLoading(false);
    })();
  }, [setLoading]);

  return (
    <div className="Product" id="product" hidden={hidden}>
      <ExhibitionModule
        title="Productos"
        items={products}
        sourceRoute="product"
      />
    </div>
  );
};

export default Product;
