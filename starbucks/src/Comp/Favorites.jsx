import React from "react";
import MenuNav from "./MenuNav";
import Footer from "./Footer";
import tapes from "./img/fav-tapes.png";
import { Link } from "react-router-dom";
import "./Previous.css";
import MenuBottom from "./MenuBottom";
import Navbar from "./Navbar";
function Favorites() {
  return (
    <div>
      <Navbar />
      <div className="fixed">
        <MenuNav />
        <div className="prev">
          <div className="container4">
            <h1>Favorites</h1>
            <div className="prev-content fav-content">
              <img src={tapes} alt="fav-tapes" />
              <h2>Save your favorite mixes</h2>
              <p>
                Use the heart to save customizations. Your favorites will appear
                here to order again.
              </p>
              <Link to="/account/signin" className="p-sign">
                Sign in
              </Link>
              <Link to="/account/create" className="p-join">
                Join now
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer /> <MenuBottom />
    </div>
  );
}

export default Favorites;
