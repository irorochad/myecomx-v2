import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartModalContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

import Button from "../button/button.component";

import { CartDropDownContainer, CartItems, EmptyMsg } from "./cart-dropdown.styles.jsx";

const CartDropDown = () => {
  const { cartItems } = useContext(CartModalContext);

  const navigateCheckout = useNavigate();
  const useNavigateToCheckout = () => {
    navigateCheckout("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMsg>Your cart is empty</EmptyMsg>
        )}
      </CartItems>
      <Button onClick={useNavigateToCheckout}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
