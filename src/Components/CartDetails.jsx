import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import "../Css/CartDetails.css";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart.products);
  console.log("added products to cart:", cart);
  return (
    <div className="c_container">
      {cart.map((product) => {
        return (
          <div key={product.id} className="c_innercontainer">
            <img src={product.image} className="c_image" alt="product_image" />
            <div className="c_details">
              <div className="c_price_name">
                <h3 className="c_name">{product.name}</h3>
                <div className="c_price">{product.price}</div>
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
              <div className="remove">
                <Button variant="outlined" color="prima">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartDetails;
