import React, { useContext } from "react";
import "./PlaceHolder.css";
import { StoreContext } from "../../components/context/StoreContext";

const PlaceHolder = () => {

const {getTotalCartAmount} = useContext (StoreContext)

  return (
    <form className="place-holder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

<input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO Payment</button>
          </div>
      </div>
    </form>
  );
};

export default PlaceHolder;
