import React from "react";
import "./TShirt.css";
const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture}></img>
      <h2>Name:{name}</h2>
      <p>
        <small>Price:{price}</small>
      </p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
    </div>
  );
};

export default Tshirt;
