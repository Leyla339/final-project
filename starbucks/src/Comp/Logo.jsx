import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
}

export default Logo;
