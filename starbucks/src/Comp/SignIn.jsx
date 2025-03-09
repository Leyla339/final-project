import React, { useState } from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import "./SignIn.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

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
          <p>* indicates required field</p>
          <input type="text" placeholder="* Username or email address" />
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="* Password"
            />
            <span onClick={togglePasswordVisibility} className="eye-icons">
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
