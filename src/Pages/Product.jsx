import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../Css/Product.css";

const Product = () => {
  const id = useParams();
  const singleProduct = useSelector((state) => state.cart.currentProduct);
  console.log("sinlge product", singleProduct);
  // console.log(id);

  const dispatch = useDispatch();

  //add to cart ()
  const addToCart = (product) => {
    console.log("added product:", product.name);
    dispatch({ type: "addProduct", payload: product });
  };

  return (
    <div className="S_product">
      <div className="S_container">
        <div className="image_container">
          <img
            src={singleProduct.image}
            alt="product_container"
            className="S_image"
          />
        </div>

        <div className="details">
          <div className="price_name">
            <h2 className="S_name">{singleProduct.name}</h2>
            <div className="S_price">₹{singleProduct.price}</div>
          </div>
          <div>
            <p className="S_desc">{singleProduct.desc}</p>
          </div>

          <Button className="add" onClick={() => addToCart(singleProduct)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
