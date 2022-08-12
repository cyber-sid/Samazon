import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckProds from "./CheckoutProds";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="check">
      <div className="check-left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg"
          alt="ad"
          className="check-ad"
        />
        <div>
          {/* <h3>Hello,{user?.email}</h3> */}
          <h3 className="check-title">Your Cart Items</h3>
          {basket.map((item) => (
            <CheckProds
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="check-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
