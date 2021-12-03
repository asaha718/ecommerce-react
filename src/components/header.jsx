import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";

import { ReactComponent as Logo } from "../assets/crown.svg";

import "../styles/header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

export default Header;
