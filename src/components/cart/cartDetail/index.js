import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import "./style.scss";

const CartDetail = () => {
  const { cart, deleteToCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = cart.reduce(
      (accumulator, product) => accumulator + product?.price * product?.amount,
      0
    );
    setTotal(calculateTotal);
  }, [cart]);

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
      {total > 0 ? (
        <div className="cart-total">
          <h3>Total:</h3>
          <p>{total}</p>
        </div>
      ) : (
        <p>No hay nada por aqui</p>
      )}
    </div>
  );
};

export default CartDetail;
