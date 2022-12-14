import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CartModalContext } from "../../context/cart.context";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal} = useContext(CartModalContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
     <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        // const { id, name, quantity } = cartItem;
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
