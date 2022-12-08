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

// Decrease and remove product function

const removeCartItem = (cartItems, cartItemToRemove) => {
  // Find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if the qunaitiy is equal 1, if yes, remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // Return

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartModalContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  // items in the cart
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartModalProiver = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState([0]);
  const [cartTotal, setcartTotal] = useState(0);

  // Use effect to show the total num of producuts in the shopping bag icon
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, countItem) => total + countItem.quantity,
      0
    );
    setcartCount(newCartCount);
  }, [cartItems]);

  // Use effect to show the total price of the cart items.
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, countItem) => total + countItem.quantity * countItem.price,
      0
    );
    setcartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  // Remove item from cart

  const cartItemToRemove = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  // Clear item from cart

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartItemToRemove,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return (
    <CartModalContext.Provider value={value}>
      {children}
    </CartModalContext.Provider>
  );
};
