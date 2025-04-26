import React, { useState } from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import "./SignIn.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <Navbar2 />
      <div className="sign-main">
        <h1>Sign in or create an account</h1>
        <div className="sign-form">
          <p>
            <span style={{ color: "#00754a", fontSize: "16px" }}>*</span>{" "}
            indicates required field
          </p>
          <input
            type="text"
            placeholder="* Username or email address"
            className="user-input"
          />
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="* Password"
              className="password-input"
            />
            <span onClick={togglePasswordVisibility} className="eye-icons">
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div className="check-box">
            <input type="checkbox" id="agree" name="agree" defaultChecked />
            <label for="agree">
              Keep me signed in. <Link>Details</Link>{" "}
            </label>
          </div>
          <Link>Forgot your username?</Link>
          <Link>Forgot your password?</Link>
          <button className="sign-in-button">Sign in</button>
        </div>
      </div>
      <div className="sign-bottom">
        <h1>Join Starbucks® Rewards</h1>
        <p>
          As a member, start earning free food and drinks, unlock our best
          offers and celebrate your birthday with a treat from us. Best of all,
          it's free to join.
        </p>
        <Link to="/account/create">Join now</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
