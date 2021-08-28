import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailEComerce from "../../shared/organisms/detailEComerce";
import resProducts from "./../../../mock/files/products.json";
import "./style.scss";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const res = new Promise((resolve) => {
      setTimeout(() => {
        resolve(resProducts.find((prod) => prod._id === id));
      }, 1000);
    });
    res.then((result) => {
      setProduct(result);
    });
  }, [id]);

  return (
    <div className="Product-detail">
      <div
        className="product-detail-img"
        style={{
          backgroundImage: `linear-gradient(
          to bottom,
          rgba(0,0,0,0.3085609243697479) ,
          transparent,
          transparent),
      url(${product?.image})`,
        }}
      ></div>
      <DetailEComerce className="product-detail-container" item={product} />
    </div>
  );
};

export default ProductDetail;
