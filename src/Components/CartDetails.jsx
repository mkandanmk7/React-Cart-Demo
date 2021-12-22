import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "../Css/CartDetails.css";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  console.log("added products to cart:", cart[0]);

  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  const dispatch = useDispatch();

  // increment quantity
  const inc = (increment) => {
    dispatch({ type: "incQuantity", payload: increment });
  };

  //decrement Quantity
  const dec = (decrement) => {
    dispatch({ type: "decQuantity", payload: decrement });
  };

  //delete

  const removeCartItem = (productId) => {
    console.log("deleted product id:", productId);
    dispatch({ type: "removeCartItem", payload: { id: productId } });
  };

  return (
    <div className="c_container">
      {cart.map((product) => {
        return (
          <div key={product.id} className="c_innercontainer">
            <div className="image_contain">
              <img
                src={product.image}
                className="c_image"
                alt="product_image"
              />
            </div>
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
                  onClick={() => inc(product)}
                >
                  +
                </Button>
                <p className="value">{quantity}</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dec(product)}
                >
                  -
                </Button>
              </div>
              <div className="remove">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => removeCartItem(product.id)}
                >
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
