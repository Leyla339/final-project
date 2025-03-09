import React from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./MenuBottom.css";
import { FaAngleDown } from "react-icons/fa6";

function MenuBottom() {
  return (
    <div className="bg-bottom">
      <div className="menu-bottom">
        <Link to="/menu/store-locator" className="bottom-content">
          <div className="bottom-text">
            <h1>For item availability</h1>
            <h2>Choose a store</h2>
          </div>
          <FaAngleDown className="down-icon" />
        </Link>
        <Link to="/menu/store-locator">
          <BsBag className="bag-icon" />
        </Link>
      </div>

      <hr />
    </div>
  );
}

export default MenuBottom;
