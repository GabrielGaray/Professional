import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Button from "../../shared/atoms/button";
import ButtonContainer from "../../shared/molecules/buttonContainer";
import DetailItem from "../../shared/organisms/detailITem";
import RequestManager from "../../../firebase/requestManager";
import firebase from "firebase/app";
import { UIContext } from "../../../context/uiContext";
import { useHistory } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import "./style.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, substractToCart, cart } = useContext(CartContext);
  const { setLoading } = useContext(UIContext);
  const history = useHistory();

  const buttons = [
    {
      name: "Agregar al carrito",
      onClick: () => addToCart(product),
      className: "buy-button",
    },
    { name: "Comprar", onClick: () => handleBuy(), className: "buy-button" },
  ];
  const [product, setProduct] = useState([]);

  const handleBuy = () => {
    if (!cart.some((prod) => prod.name === product.name)) {
      addToCart(product);
    }
    history.push("/cart");
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await RequestManager.get("products", [
        firebase.firestore.FieldPath.documentId(),
        "==",
        id,
      ]);
      setProduct({ ...res, amount: 0 });
      setLoading(false);
    })();
  }, [id, setLoading]);

  const getProductInCart = () => {
    return cart?.find((product) => product?.id === id);
  };

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
            <div className="item-count">
              <div className="item-price">
                <label>{`$${product?.price} x`}</label>
                <p>{getProductInCart()?.amount || 0}</p>
              </div>
              <div className="item-button">
                <Button name={<Remove />} onClick={() => substractToCart(product)} />
                <Button
                  name={<Add />}
                  onClick={() => addToCart(product)}
                />
              </div>
            </div>
            <ButtonContainer items={buttons} />
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ProductDetail;
