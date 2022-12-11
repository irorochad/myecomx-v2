import { useContext } from "react";

import "./categories.styles.scss";

import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preivew";

// import SHOP_DATA from "../../shop-data.json";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};
export default CategoriesPreview;
