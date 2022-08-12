import React from "react";
import { useStateValue } from "../StateProvider";
import "./cartprods.css";

function CheckProds({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "Remove_Basket",
      id: id,
    });
  };
  return (
    <div className="main-box">
      <img src={image} alt="img" className="cart-img" />
      <div className="prod-info">
        <p className="cart-title">{title}</p>
        <p className="cart-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <button className="cart-but" onClick={removeItem}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckProds;
