import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartModalContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartModalContext);

  const navigateCheckout = useNavigate();
  const useNavigateToCheckout = () => {
    navigateCheckout("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {/* {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))} */}
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <h2 className="empty-message">Your cart is empty</h2>
        )}
      </div>
      <Button onClick={useNavigateToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
