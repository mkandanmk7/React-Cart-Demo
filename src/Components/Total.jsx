import { Button } from "@material-ui/core";
import React from "react";

import "../Css/Total.css";

const Total = () => {
  return (
    <div className="Total_container">
      <div className="total_innerContainer">
        <h2 className="Total">Total Amount : ₹ 4000 </h2>

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
