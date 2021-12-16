import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Css/ProductList.css";
// import data from "../data";

const ProductList = () => {
  const allProducts = useSelector((state) => state.cart);
  console.log(allProducts);

  const dispatch = useDispatch();

  //load single product
  const singleProduct = (product) => {
    dispatch({ type: "getCurrentProduct", payload: product });
  };

  return (
    <div className="Pcontainer">
      <div className="product_container">
        {allProducts.allProduct.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} className="image" alt="product_image" />
              <div className="product_innercontainer">
                <div className="priceEnd">
                  <h2 className="name"> {product.name}</h2>
                  <div className="price">₹ {product.price}</div>
                </div>
                <div className="desc">{product.desc}</div>
                <div className="product_button">
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="link"
                  >
                    <Button
                      onClick={() => singleProduct(product)}
                      variant="outlined"
                    >
                      View Item
                    </Button>
                  </Link>
                  <Button variant="contained">Add to Cart</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
