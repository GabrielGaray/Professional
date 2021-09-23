import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../../context/cartContext";
import { UIContext } from "../../../context/uiContext";
import RequestManager from "../../../firebase/requestManager";
import "./style.scss";

const CartDetail = () => {
  const { cart, deleteToCart, totalPrice, deleteCart } =
    useContext(CartContext);
  const { loading, setLoading } = useContext(UIContext);
  const history = useHistory();

  const handleSubmit = async () => {
    setLoading(true);
    const body = {
      price: totalPrice,
      idProducts: setArray(cart),
    };
    const res = await RequestManager.add("sale", body);
    setLoading(false);
    deleteCart();
    window.alert(`La compra se ha realizado con exito. ID de la compra ${res}`);
    history.push("/");
  };

  const setArray = (products) => {
    return products.map((product) => `sale/${product.id}`);
  };

  return (
    <div className="Cart-detail">
      <h2>Carrito</h2>
      <div className="cart-list">
        {cart?.map((product, index) => (
          <div className="cart-product" key={index}>
            <label>{product?.name}</label>
            <p>{`${product?.price} X ${product.amount}`}</p>
            <button
              disabled={loading}
              onClick={() => deleteToCart(product?.id)}
            >
              Borrar
            </button>
          </div>
        ))}
      </div>
      {totalPrice > 0 ? (
        <div className="cart-total">
          <h3>Total:</h3>
          <p>{totalPrice}</p>
          <button disabled={loading} type="submit" onClick={handleSubmit}>
            Finalizar Compra
          </button>
        </div>
      ) : (
        <p>No hay nada por aqui</p>
      )}
    </div>
  );
};

export default CartDetail;
