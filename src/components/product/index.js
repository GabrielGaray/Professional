import React, { useEffect, useState } from "react";
import ExhibitionModule from "../shared/organisms/exhibitionModule";
import resProducts from "./../../mock/files/products.json";
import "./style.scss";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const res = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resProducts);
      }, 1000);
    });
    res.then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div className="Product" id="product">
      <ExhibitionModule title="Productos" items={products} />
    </div>
  );
};

export default Product;
