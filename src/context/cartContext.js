import { createContext, useEffect, useState } from "react";
import Cart from "../components/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amountProducts, setAmountProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const indexProduct = isInCart(product?.id);
    if (indexProduct !== -1) {
      let localCart = [...cart];
      localCart[indexProduct].amount = ++cart[indexProduct].amount;
      setCart(localCart);
    } else setCart([...cart, { ...product, amount: 1 }]);
  };

  const deleteToCart = (id) => {
    setCart(cart?.filter((product) => product?.id !== id));
  };

  const deleteCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart?.findIndex((product) => product?.id === id);
  };

  useEffect(() => {
    const calculateTotalProducts = cart.reduce(
      (accumulator, product) => accumulator + product?.amount,
      0
    );
    const calculateTotalPrice = cart.reduce(
      (accumulator, product) => accumulator + product?.price * product?.amount,
      0
    );

    setAmountProducts(calculateTotalProducts);
    setTotalPrice(calculateTotalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        deleteToCart,
        deleteCart,
        totalPrice,
      }}
    >
      <Cart show={amountProducts > 0} number={amountProducts} />
      {children}
    </CartContext.Provider>
  );
};
