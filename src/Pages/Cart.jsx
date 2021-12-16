import React from "react";
import CartDetails from "../Components/CartDetails";
import Total from "../Components/Total";

//css
import "../Css/Cart.css";

const Cart = () => {
  return (
    <div className="cart_container">
      <CartDetails />
      <Total />
    </div>
  );
};

export default Cart;
