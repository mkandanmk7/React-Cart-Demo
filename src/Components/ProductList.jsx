import React from "react";
import { Link } from "react-router-dom";
import "../Css/ProductList.css";
import data from "../data";

const ProductList = () => {
  return (
    <div className="Pcontainer">
      <div className="product_container">
        {data.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="link"
            >
              <div className="product" key={product.id}>
                <img
                  src={product.image}
                  className="image"
                  alt="product_image"
                />
                <div>
                  <div className="priceEnd">
                    <h2 className="name"> {product.name}</h2>
                    <div className="price">₹ {product.price}</div>
                  </div>
                  <div className="desc">{product.desc}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
