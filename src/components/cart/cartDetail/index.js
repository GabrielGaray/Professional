import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import "./style.scss";

const CartDetail = () => {
  const { cart, deleteToCart, totalPrice } = useContext(CartContext);

  return (
    <div className="Cart-detail">
      <h2>Carrito</h2>
      <div className="cart-list">
        {cart?.map((product, index) => (
          <div className="cart-product" key={index}>
            <label>{product?.name}</label>
            <p>{`${product?.price} X ${product.amount}`}</p>
            <button onClick={() => deleteToCart(product?.id)}>Borrar</button>
          </div>
        ))}
      </div>
      {totalPrice > 0 ? (
        <div className="cart-total">
          <h3>Total:</h3>
          <p>{totalPrice}</p>
        </div>
      ) : (
        <p>No hay nada por aqui</p>
      )}
    </div>
  );
};

export default CartDetail;
