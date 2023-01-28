import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-row.style.scss";

const CheckoutRow = ({ productDetail }) => {
  const { name, imageUrl, price, quantity } = productDetail;
  const { addItemToCart, subItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subItemFromCart(productDetail)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(productDetail)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemFromCart(productDetail);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutRow;
