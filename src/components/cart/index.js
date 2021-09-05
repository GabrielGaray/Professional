import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const Cart = ({ show, number }) => {
  const history = useHistory();

  return (
    <div className="Cart" onClick={() => history.push("/cart")} hidden={!show}>
      <div className="cart-number">{number}</div>
      <ShoppingCart />
    </div>
  );
};

export default Cart;
