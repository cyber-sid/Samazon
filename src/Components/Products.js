import React from "react";
import "./products.css";
import "../asset/cards-data";
import { useStateValue } from "../StateProvider";

function Products(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    try {
      dispatch({
        type: "Add_Basket",
        item: {
          id: props.cid,
          image: props.cimg,
          title: props.cinfo,
          price: props.cprice,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="card">
      <div className="card-data">
        <p className="card-inf0">{props.cinfo}</p>
        <p className="card-price">
          <strong>₹ {props.cprice}</strong>
        </p>
        <img src={props.cimg} alt="watch" className="card-img" />

        <button onClick={addtoBasket}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Products;
