import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../data";

const Product = () => {
  const id = useParams();
  const singleProduct = useSelector((state) => state.cart);
  console.log("sinlge product", singleProduct);
  console.log(id);
  // console.log(data);
  return (
    <div className="S_product">
      <div className="S_container">
        <img src="img" alt="product_container" className="S_image" />
        <div className="details">
          <h2 className="S_name">name</h2>
          <div className="S_price">price</div>
          <div>
            <p className="S_desc">Desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
