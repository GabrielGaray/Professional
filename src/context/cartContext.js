import { createContext, useState } from "react";
import Cart from "../components/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const indexProduct = isInCart(product.id);
    if (indexProduct !== -1) {
      cart[indexProduct].amount = ++cart[indexProduct].amount;
      setCart(cart);
    } else setCart([...cart, product]);
  };
  
  const deleteToCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  
  const cartQuantity = () => {
    return cart.reduce(
      (accumulator, product) => accumulator + product.amount,
      0
      );
    };
    
    const deleteCart = () => {
      setCart([]);
  };
  
  const isInCart = (id) => {
    return cart.findIndex((product) => product.id === id);
  };
  
  return (
    <CartContext.Provider
    value={{
      cart,
      isInCart,
        addToCart,
        deleteToCart,
        cartQuantity,
        deleteCart,
      }}
    >
      <Cart show={cart?.length > 0} number={cart?.length} />
      {children}
    </CartContext.Provider>
  );
};
