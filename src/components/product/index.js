import React, { useEffect, useState } from "react";
import ExhibitionModule from "../shared/organisms/exhibitionModule";
import RequestManager from "../../firebase/requestManager";

// import resProducts from "./../../mock/files/products.json";
import "./style.scss";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await RequestManager.get("products");
      setProducts(res);
    })();
  }, []);

  return (
    <div className="Product" id="product">
      <ExhibitionModule title="Productos" items={products} />
    </div>
  );
};

export default Product;
