import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, ProductToAdd) => {
  //find if cartItems contains productsToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === ProductToAdd.id
  );

  //if found incriment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ProductToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with cartitems. new cart item

  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  ammountOfItem: 0,
  setAmmountOfItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [ammountOfItem, setAmmountOfItem] = useState(0);

  useEffect(() => {
    const newAmmountOfItem = cartItems.reduce(
      (acc, cur) => acc + cur.quantity,
      0
    );
    setAmmountOfItem(newAmmountOfItem);
  }, [cartItems]);

  const addItemToCart = (ProductToAdd) => {
    setCartItems(addCartItem(cartItems, ProductToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    ammountOfItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
