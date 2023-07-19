import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalItems: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {
    const existedProduct = cart.find((prod) => prod.item.id === item.id);

    if (!existedProduct) {
      setCart((prev) => [...prev, { item, quantity }]);
      setTotalItems((prev) => prev + quantity);
      setTotal((prev) => prev + item.price * quantity);
    } else {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      setTotalItems((prev) => prev + quantity);
      setTotal((prev) => prev + item.price * quantity);
    }
  };

  const removeItem = (id) => {
    const eliminatedProduct = cart.find((prod) => prod.item.id === id);
    const updatedCart = cart.filter((prod) => prod.item.id !== id);

    setCart(updatedCart);
    setTotalItems((prev) => prev - eliminatedProduct.quantity);
    setTotal(
      (prev) => prev - eliminatedProduct.item.price * eliminatedProduct.quantity
    );
  };

  const clearCart = () => {
    setCart([]);
    setTotalItems(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
