import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocument } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState([]);
  useEffect(() => {
    addCollectionAndDocument("categories", SHOP_DATA);
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
