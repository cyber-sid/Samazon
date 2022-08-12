import React from "react";
import CurrencyFormat from "react-currency-format";
import { BaskTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="sub">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="sub-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={BaskTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
