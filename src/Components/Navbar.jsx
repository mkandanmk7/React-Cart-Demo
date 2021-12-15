import { Badge, IconButton, withStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
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
  return (
    <div>
      <div className="Nav_container">
        <div className="left">Shopify</div>
        <div className="right">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCart />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
