import "./checkout-table.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useEffect } from "react";
import CheckoutRow from "../checkout-row/checkout-row.component";

const CheckoutTable = () => {
  const { cartItems, setIsCartOpen, totalPrice } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutRow key={cartItem.id} productDetail={cartItem} />;
      })}
      <span className="total">Total : {totalPrice}</span>
    </div>
  );
};
export default CheckoutTable;
