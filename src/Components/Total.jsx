import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import "../Css/Total.css";

const Total = () => {
  const total = useSelector((state) => state.cart);
  console.log(total);
  return (
    <div className="Total_container">
      <div className="total_innerContainer">
        <h2 className="Total">Total Amount : ₹ 5000</h2>

        <div className="Checkout">
          <Button variant="contained" color="secondary">
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Total;
