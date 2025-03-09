import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaSpotify } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

function Footer() {
  const [openSections, setOpenSections] = useState([]); // Хранит массив открытых секций

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sections = [
    {
      title: "About Us",
      links: [
        { text: "Our Company", path: "/about-us/" },
        { text: "Our Coffee", path: "/coffee/" },
        { text: "About Starbucks", path: "#" },
        { text: "Starbucks Archive", path: "#" },
        { text: "Investor Relations", path: "#" },
        { text: "Customer Service", path: "#" },
        { text: "Contact Us", path: "/contact/" },
      ],
    },
    {
      title: "Careers",
      links: [
        { text: "Culture and Values", path: "#" },
        { text: "Inclusion, Diversity, & Belonging", path: "#" },
        { text: "College Achievement Plan", path: "#" },
        { text: "Alumni Community", path: "#" },
        { text: "U.S. Careers", path: "#" },
        { text: "International Careers", path: "#" },
      ],
    },
    {
      title: "Social Impact",
      links: [
        { text: "Communities", path: "#" },
        { text: "Starbucks Foundation", path: "#" },
        { text: "Sustainability", path: "#" },
        {
          text: "Environmental and Social Impact Reporting",
          path: "/responsibility/reporting-hub/",
        },
      ],
    },
    {
      title: "For Business Partners",
      links: [
        { text: "Landlord Support Center", path: "/business/landlord-faq/" },
        { text: "Suppliers", path: "/business/suppliers/" },
        { text: "Corporate Gift Card Sales", path: "#" },
        {
          text: "Office and Foodservice Coffee",
          path: "#",
        },
        {},
      ],
    },

    {
      title: "Order and Pick Up",
      links: [
        { text: "Order on the App", path: "/rewards/mobile-apps/" },
        { text: "Order on the Web", path: "/menu" },
        { text: "Delivery", path: "/stores-and-ordering/delivery/" },
        {
          text: "Order and Pick Up Options",
          path: "/stores-and-ordering/",
        },
        {
          text: "OExplore and Find Coffee for Home",
          path: "#",
        },
      ],
    },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="f-columns">
          {sections.map((section, index) => (
            <div className="f-col1" key={index}>
              <h2 onClick={() => toggleSection(index)}>
                {section.title}
                {openSections.includes(index) ? (
                  <FaAngleUp className="toggle-icon" />
                ) : (
                  <FaAngleDown className="toggle-icon" />
                )}
              </h2>
              <div className={`f-links ${openSections.includes(index) ? "open" : ""}`}>
                {section.links.map((link, i) => (
                  <Link key={i} to={link.path}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="f-line" />
        <div className="f-icons">
          <Link to="https://open.spotify.com/user/starbucks">
            <FaSpotify className="f-icon" />
          </Link>
          <Link to="https://www.facebook.com/Starbucks/">
            <FaFacebookF className="f-icon" />
          </Link>
          <Link to="https://www.pinterest.com/starbucks/">
            <FaPinterestP className="f-icon" />
          </Link>
          <Link to="https://www.instagram.com/starbucks/">
            <FaInstagram className="f-icon" />
          </Link>
          <Link to="https://www.youtube.com/starbucks">
            <FaYoutube className="f-icon" />
          </Link>
          <Link to="https://x.com/starbucks/">
            <BsTwitterX className="f-icon" />
          </Link>
        </div>

        <div className="footer-2">
          <div className="f2-links">
            <Link to="/terms/privacy-notice/">Privacy Notice</Link>
            <Link to="/terms/privacy-notice/">
              Consumer Health Privacy Notice
            </Link>
            <Link to="/terms/starbucks-terms-of-use/">Terms of Use</Link>
            <Link to="/personal-information">
              Do Not Share My Personal Information
            </Link>
            <Link to="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf">
              CA Supply Chain Act
            </Link>
            <Link to="/about-us/accessibility/">Accessibility</Link>
            <Link>Cookie Preferences</Link>
          </div>
          <h3>© 2025 Starbucks Coffee Company. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
