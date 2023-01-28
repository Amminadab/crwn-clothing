import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import "./cart-icon.style.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, ammountOfItem } = useContext(CartContext);

  const toggleIscartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={toggleIscartOpen} className="shopping-icon" />
      <span className="item-count">{ammountOfItem}</span>
    </div>
  );
};

export default CartIcon;
