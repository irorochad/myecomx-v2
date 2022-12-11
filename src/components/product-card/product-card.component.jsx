import { useContext } from "react";

import { CartModalContext } from "../../context/cart.context";

import "./styles.product-card.scss";
import Button from "../button/button.component";

const ProductCard = ({ products }) => {
  const { addItemToCart } = useContext(CartModalContext);
  const { name, price, imageUrl } = products;

  const addProductToCart = () => addItemToCart(products);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
