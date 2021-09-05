import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import "./style.scss";

const CartDetail = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="Cart-detail">
      <h2>Carrito</h2>
      {cart?.map((product) => (
        <div className="cart-list">
          <label>{product?.name}</label>
          <p>{product?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartDetail;
