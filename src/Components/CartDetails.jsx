import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import "../Css/CartDetails.css";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart.products);
  console.log("added products to cart:", cart);
  return (
    <div className="c_container">
      <div className="c_innercontainer">
        <img src="h" alt="product_image" />
        <div className="c_details">
          <div className="c_price_name">
            <h3 className="c_name">name</h3>
            <div className="c_price">price</div>
          </div>
          <div className="inc">
            <Button
              variant="contained"
              color="secondary"
              className="inc_quantity"
            >
              +
            </Button>
            <p className="value">5</p>
            <Button variant="contained" color="primary">
              -
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
