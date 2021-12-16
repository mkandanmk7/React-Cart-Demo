import { Badge, IconButton, withStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

//styled for customize;

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div>
      <div className="Nav_container">
        <div className="left">
          <Link to="/" className="link">
            Shopify
          </Link>
        </div>
        <div className="right">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={quantity} color="secondary">
              <Link to="/cart" className="link">
                <ShoppingCart />
              </Link>
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
