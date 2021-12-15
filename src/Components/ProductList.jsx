import React from "react";
import "../Css/ProductList.css";
import data from "../data";

const ProductList = () => {
  return (
    <div className="Pcontainer">
      <div className="product_container">
        {data.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="product_image" />
              <h2 className="name"> {product.name}</h2>
              <div className="desc">{product.desc}</div>
              <div className="price">₹ {product.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
