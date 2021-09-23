import React, { useContext, useEffect, useState } from "react";
import ExhibitionModule from "../shared/organisms/exhibitionModule";
import RequestManager from "../../firebase/requestManager";
import { UIContext } from "../../context/uiContext";

import "./style.scss";

const Product = () => {
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
    <div className="Product" id="product">
      <ExhibitionModule title="Productos" items={products} />
    </div>
  );
};

export default Product;
