import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "./Logo.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Отключаем прокрутку
    } else {
      document.body.style.overflow = "auto"; // Включаем обратно
    }
  }, [isMenuOpen]);
  return (
    <div>
      <div className="box-shadow">
        <div className="container">
          <div className="nav">
            <Logo />
            <div className="main-nav">
              <div className="nav1">
                <Link to="/menu">menu</Link>
                <Link to="/rewards">rewards</Link>
                <Link to="/gift">gift cards</Link>
              </div>
              <div className="nav2">
                <Link to="/store-locator" className="location">
                  <IoLocationSharp className="loc-icon" />
                  Find a store
                </Link>
                <Link to="/account/signin" className="sign">
                  Sign in
                </Link>
                <Link to="/account/create" className="join">
                  Join now
                </Link>
              </div>
            </div>

            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

            <button className="dropdown-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoMdClose className="close-icon" />
              ) : (
                <RxHamburgerMenu className="menu-icon" />
              )}
            </button>
            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
              <Link to="/menu" onClick={toggleMenu}>
                Menu
              </Link>
              <Link to="/rewards" onClick={toggleMenu}>
                Rewards
              </Link>
              <Link to="/gift" onClick={toggleMenu}>
                Gift Cards
              </Link>
              <hr className="drop-line" />
              <div className="registr">
                <Link
                  to="/account/signin"
                  className="sign"
                  onClick={toggleMenu}
                >
                  Sign in
                </Link>
                <Link
                  to="/account/create"
                  className="join"
                  onClick={toggleMenu}
                >
                  Join now
                </Link>
              </div>
              <Link
                to="/store-locator"
                className="location"
                onClick={toggleMenu}
              >
                <IoLocationSharp className="loc-icon" />
                Find a store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
