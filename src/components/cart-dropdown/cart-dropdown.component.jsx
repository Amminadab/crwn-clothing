import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
