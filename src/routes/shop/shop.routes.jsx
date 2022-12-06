import { useContext } from "react";

import "./styles.shop.scss";

import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";
// import SHOP_DATA from "../../shop-data.json";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((products) => (
        <ProductCard key={products.id} products={products} />
      ))}
    </div>
  );
};
export default Shop;
