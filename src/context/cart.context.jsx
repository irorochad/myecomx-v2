import { createContext, useState } from "react";

export const CartModalContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
});

export const CartModalProiver = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(CartModalContext);
  const value = { isCartOpen, setisCartOpen };
  return (
    <CartModalContext.Provider value={value}>
      {children}
    </CartModalContext.Provider>
  );
};
