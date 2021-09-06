import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Button from "../../shared/atoms/button";
import Input from "../../shared/atoms/input";
import ButtonContainer from "../../shared/molecules/buttonContainer";
import DetailItem from "../../shared/organisms/detailITem";
import resProducts from "./../../../mock/files/products.json";
import "./style.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);
  const buttons = [
    { name: "Agregar al carrito", onClick: () => addToCart(product) },
    { name: "Comprar" },
  ];
  const [product, setProduct] = useState([]);
  const [productInCart, setProductInCart] = useState(undefined);

  useEffect(() => {
    const res = new Promise((resolve) => {
      setTimeout(() => {
        resolve(resProducts.find((prod) => prod.id === id));
      }, 1000);
    });
    res.then((result) => {
      setProduct(result);
    });
  }, [id]);

  useEffect(() => {
    setProductInCart(cart.find((prod) => prod.id === id));
  }, [cart, id]);
  
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
      <DetailItem
        className="product-detail-container"
        item={product}
        content={
          <React.Fragment>
            <p>{product?.detail}</p>
            <label>{product?.price}</label>
            <div className="item-count">
              <Input value={productInCart?.amount} />
              <Button name="+" onClick={() => addToCart(product)} />
            </div>
            <ButtonContainer items={buttons} />
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ProductDetail;
