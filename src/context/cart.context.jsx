import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //check if cartItems contains any productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment the quantity.
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //then return a new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartModalContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  // items in the cart
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartModalProiver = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);

  // Use effect to show the total num of producuts in the shopping bag icon
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, countItem) => total + countItem.quantity,
      0
    );
    setcartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return (
    <CartModalContext.Provider value={value}>
      {children}
    </CartModalContext.Provider>
  );
};
