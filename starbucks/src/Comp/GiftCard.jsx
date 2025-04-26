import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./GiftCard.css";
import { FaAngleDown } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

function GiftCard() {
  return (
    <div>
      <Navbar />
      <div className="gift-card-container">
        <div className="gift-card1">
          <div className="gift-nav">
            <Link to="/gift">Gift</Link>
            <p>/ Create eGift</p>
          </div>
          <div className="gift-main">
            <h1>Create eGift</h1>
            <img
              src="https://globalassets.starbucks.com/digitalassets/cards/fy25/SpringSeasonalFY25.png"
              alt="gift-card"
            />
            <p>
              <span style={{ color: "#00754a", fontSize: "18px" }}>*</span>{" "}
              indicates required field
            </p>
          </div>
          <div className="gift-amount">
            <h1>Gift Amount</h1>
            <hr className="gift-line" />
            <form action="" className="gift-form">
              <p className="form-position">
                <span style={{ color: "#00754a", fontSize: "18px" }}>*</span>
                Select gift amount
              </p>
              <select>
                <option disabled>Select gift amount</option>
                <option>$10</option>
                <option selected="selected">$25</option>
                <option>$50</option>
                <option>$100</option>
                <option>Custom Amount</option>
              </select>
              <FaAngleDown className="gift-form-icon" />
            </form>
          </div>
          <div className="gift-to">
            <h1>Who are you gifting to?</h1>
            <hr className="gift-line" />
            <input type="text" placeholder="*Recipient Name" />
            <input type="email" placeholder="*Recipient Email" />
            <p>Maximum of 10 recipients</p>
            <div className="gift-button">
              <button>Add another recipient</button>
            </div>
          </div>
          <div className="personal-note">
            <h1>Personal note to all</h1>
            <hr className="gift-line" />
            <textarea name="note" placeholder="Message(optional)"></textarea>
          </div>
          <div className="gift-from">
            <h1>From</h1>
            <hr className="gift-line" />
            <input type="text" placeholder="*Sender Name" />
            <input type="email" placeholder="*Sender Email" />
          </div>
        </div>
      </div>
      <div className="gift-end-bg">
        <div className="gift-end-container">
          <div className="gift-end">
            <div className="gift-end-flex">
              <BsStars className="gift-stars" />
              <p>
                By purchasing this eGift, I have read and agree to the Starbucks
                Card Terms & Conditions.
              </p>
            </div>
            <div>
              <Link to="/terms/manage-gift-cards/">
                Card Terms & Conditions <GoLinkExternal className="link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button className="gift-position-button">Checkout $25.00</button>
      <Footer />
    </div>
  );
}

export default GiftCard;
