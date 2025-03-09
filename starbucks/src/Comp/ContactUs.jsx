import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import ContactFooter from "./ContactFooter";
import Navbar from "./Navbar";
function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="contact-position">
          <h1>Contact Us</h1>
        </div>
        <div className="container3">
          <div className="contact-content">
            <h1>Contact us</h1>
            <div className="c-content1">
              <h2>Customer Service</h2>
              <p>
                If you have general questions or concerns about Starbucks,
                please contact our Customer Contact Center {""}
                <Link>customerservice.starbucks.com</Link>.
              </p>
            </div>
            <div className="c-content1">
              <h2>Media Contacts</h2>
              <p>
                Please email your detailed inquiry and deadline for response to
                the following: <br />
                Global: <br />
                <br />
                Phone: 206 318 7100 <br />
                <br />
                Email: <Link>press@starbucks.com </Link> <br /> For inquiries
                related to Asia or Canada please visit their respective <br />{" "}
                Starbucks Stories & News site <br />
                Europe, Middle East and Africa <br />
                <br /> Phone: +44 20 3047 2656 <br />
                <br /> Email: PressEMEA@starbucks.com
              </p>
            </div>
            <div className="c-content1">
              <h2>Investor Relations</h2>
              <p>
                For inquiries related to stock ownership please submit a written
                inquiry through email to
                <Link>investorrelations@starbucks.com.</Link>
              </p>
            </div>
            <div className="c-content1">
              <h2>Partnership and Sponsorship Requests</h2>
              <p>
                If you have an exciting partnership or sponsorship you’d like us
                to consider, please send a detailed overview of the opportunity
                and your information to <Link>partnerships@starbucks.com.</Link>
              </p>
            </div>
          </div>
          <div>
            <ContactFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
