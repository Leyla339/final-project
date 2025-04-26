import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Delivery.css";
import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import delivery from "./img/delivery-hero.png";

function Delivery() {
  return (
    <div className="delivery-jsx">
      <Navbar />
      <div className="locator">
        <div className="responsive-container">
          <div className="delivery-cont">
            {/* Кнопки */}
            <div className="delivery">
              <Link to="/store-locator?map=40.542209,-94.660067,5z">
                Pickup
              </Link>
              <Link to="/store-locator/delivery?map=40.542209,-94.660067,5z">
                Delivery
              </Link>
            </div>

            {/* Текст */}
            <div className="delivery-info">
              <h1>Today deserves delivery</h1>
              <p>
                Enjoy Starbucks® delivery powered by DoorDash. For additional
                help, visit <Link>Delivery FAQs</Link>
              </p>
              <Link className="get-started">
                Get started <LuExternalLink />
              </Link>
              <p className="info-delivery-text">
                Menu limited. Menu pricing for delivery may be higher than
                posted in stores or as marked. Additional fees may apply.
                Delivery orders are not eligible for Starbucks® Rewards benefits
                at this time.
              </p>
            </div>
          </div>
          {/* Картинка */}
          <div className="delivery-right">
            <img src={delivery} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
