// import Button from "../button/button.component";
import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      {/* <Button>GO TO CHECKOUT</Button> */}
    </div>
  );
};

export default CartItem;
