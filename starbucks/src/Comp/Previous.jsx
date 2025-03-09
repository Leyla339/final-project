import React from "react";
import MenuNav from "./MenuNav";
import Footer from "./Footer";
import moon from "./img/moon-phases.gif";
import { Link } from "react-router-dom";
import "./Previous.css";
import MenuBottom from "./MenuBottom";
import Navbar from "./Navbar";
function Previous() {
  return (
    <div>
      <Navbar />
      <div className="fixed">
        <MenuNav />
        <div className="prev">
          <div className="container4">
            <h1>Previous</h1>
            <div className="prev-content">
              <img src={moon} alt="" />
              <h2>When history repeats itself</h2>
              <p>Previous orders will appear here to quickly order again.</p>
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
      <Footer />
      <MenuBottom />
    </div>
  );
}

export default Previous;
