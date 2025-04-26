import React, { useState } from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import "./Join.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

function Join() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <Navbar2 />
      <div className="sign-main join-main">
        <h1>Create an account</h1>
        <h2>Starbucks® Rewards</h2>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link to="/rewards">more</Link>
        </p>
        <div className="sign-form join-form">
          <p>
            <span style={{ color: "#00754a", fontSize: "16px" }}>*</span>{" "}
            indicates required field
          </p>
          <h1>Personal Information </h1>

          <input
            type="text"
            placeholder="* First name"
            className="user-input"
          />
          <input type="text" placeholder="* Last name" className="user-input" />

          <h1>Account Security</h1>
          <input
            type="email"
            placeholder="* Email address"
            className="user-input"
          />
          <p className="pass-text">This will be your username</p>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="* Password"
              className="password-input"
            />
            <span
              onClick={togglePasswordVisibility}
              className="eye-icons eye-icon-join"
            >
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <p className="pass-text">
            Create a password 8 to 25 characters long that includes at least 1
            uppercase and 1 lowercase letter, 1 number and 1 special character
            like an exclamation point or asterisk.
          </p>
          <h2 className="collect-term">Collect more Stars & Earn Rewards</h2>
          <p className="collect-p">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </p>
          <div className="check-box">
            <input type="checkbox" id="agree" name="agree" defaultChecked />
            <label for="agree">Yes, I’d like email from Starbucks</label>
          </div>
          <p className="know-p">
            Know about initiatives, announcements and product offers.
          </p>
          <h2 className="collect-term">Terms of Use</h2>
          <div className="check-box">
            <input type="checkbox" id="agree" name="agree" defaultChecked />
            <label for="agree" className="agree-links">
              * I agree to the{" "}
              <Link>
                Starbucks® Rewards Terms <GoLinkExternal className="link-join-icon" />
              </Link>
              and the{" "}
              <Link>
                Starbucks Card Terms <GoLinkExternal className="link-join-icon"/>{" "}
              </Link>
              and have read the{" "}
              <Link>
                Starbucks Privacy Statement <GoLinkExternal className="link-join-icon"/>{" "}
              </Link>
            </label>
          </div>
          <button className="join-button">Create account</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Join;
