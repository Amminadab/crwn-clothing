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

const subCartItem = (cartItems, productToRemove) => {
  // find the cart item to remove
  const itemToBeRemoved = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  //if quantity equals to one remove the item
  if (itemToBeRemoved.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  //return back cart item with maching cart with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: productToRemove.quantity - 1 }
      : cartItem
  );
};

const removeFromCart = (cartItems, cartItemToBeRemoved) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToBeRemoved.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  subItemFromCart: () => {},
  removeItemFromCart: () => {},
  ammountOfItem: 0,
  setAmmountOfItem: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [ammountOfItem, setAmmountOfItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newAmmountOfItem = cartItems.reduce(
      (acc, cur) => acc + cur.quantity,
      0
    );
    setAmmountOfItem(newAmmountOfItem);
  }, [cartItems]);

  useEffect(() => {
    const calucateTotal = (cartItems) => {
      const PRICE = cartItems.reduce(
        (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
        0
      );
      setTotalPrice(PRICE);
    };
    calucateTotal(cartItems);
  }, [cartItems]);

  const addItemToCart = (ProductToAdd) => {
    setCartItems(addCartItem(cartItems, ProductToAdd));
  };
  const subItemFromCart = (productToRemove) => {
    setCartItems(subCartItem(cartItems, productToRemove));
  };
  const removeItemFromCart = (cartItemToBeRemoved) => {
    setCartItems(removeFromCart(cartItems, cartItemToBeRemoved));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    ammountOfItem,
    addItemToCart,
    subItemFromCart,
    removeItemFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
