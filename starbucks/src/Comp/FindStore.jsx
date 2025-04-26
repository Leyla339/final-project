import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./FindStore.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

function FindStore() {
  return (
    <div>
      <Navbar />
      <div className="locator">
        <div className="find-left">
          <div className="fixed-left">
            <div className="find-method">
              <Link to="/store-locator?map=40.542209,-94.660067,5z">
                Pickup
              </Link>
              <Link to="/store-locator/delivery?map=40.542209,-94.660067,5z">
                Delivery
              </Link>
            </div>
            <form className="find-part">
              <input type="text" placeholder="Find a store " />
              <CiSearch className="search-icon" />
              <button>Filter</button>
            </form>
          </div>
          <div className="find-left-bottom">
            <div className="find-info-bg">
              <div className="find-info">
                <h1>We are unable to access your exact location</h1>
                <p>
                  To find a Starbucks store, use the search feature, navigate
                  using the map, or turn on location services.
                </p>
              </div>
            </div>
            <div className="find-links">
              <Link>
                Privacy Notice <LuExternalLink />
              </Link>
              <Link>
                Terms of Use <LuExternalLink />
              </Link>
              <Link>
                Do Not Share My Personal Information <LuExternalLink />
              </Link>
            </div>
          </div>
        </div>
        <div className="find-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10940248.984692067!2d-107.59590192792942!3d39.63905592701786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z0KHQvtC10LTQuNC90LXQvdC90YvQtSDQqNGC0LDRgtGLINCQ0LzQtdGA0LjQutC4!5e0!3m2!1sru!2saz!4v1742563254487!5m2!1sru!2saz"
            width="100%"
            height="473px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FindStore;
