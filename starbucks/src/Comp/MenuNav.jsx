import React from "react";
import "./MenuNav.css";
import { Link } from "react-router-dom";

function MenuNav() {
  return (
    <div className="menu-nav1">
      <div className="container4">
        <div className="menu-nav">
          <Link to="/menu">menu</Link>
          <Link to="/featured">featured</Link>
          <Link to="/previous">previous</Link>
          <Link to="/favorites">favorites</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
