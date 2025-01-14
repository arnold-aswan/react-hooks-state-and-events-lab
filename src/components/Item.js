import { React, useState } from "react";
import items from "../data/items";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  const handleAddToCart = () => {
    setCart(!cart);
  };

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {cart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
