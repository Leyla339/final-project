import React from "react";
import { Link } from "react-router-dom";
import "./OurCoffee.css";
import coffee1 from "./img/coffee1.webp";
import coffee2 from "./img/coffee2.webp";
import coffee3 from "./img/coffee3.webp";
import Footer from "./Footer";
import Navbar from "./Navbar";

function OurCoffee() {
  return (
    <div>
      <Navbar />
      <div className="container2">
        <div className="coffee">
          <div className="coffee-content">
            <h1>Let's talk coffee</h1>
            <h3>
              Whether you're searching for something new to warm your mug,
              seeking the best brew method for your favorite blend or exploring
              our rarest offerings, you’ve come to the right place.
            </h3>
          </div>
          <div className="coffee-content">
            <img src={coffee1} />
            <h2>Find your favorite at-home coffee</h2>
            <p>
              From K-Cup pods to Starbucks® Premium Instant, we offer a wide
              selection of coffee to fill your cup.
            </p>
            <Link className="cf-btn1">Browse our coffees</Link>
          </div>
          <div className="coffee-content">
            <p>
              Still undecided? Our new Coffee Quiz makes it easy to find the
              Starbucks® coffee that's made to be yours. Just answer five
              questions to find the one.
            </p>
            <Link className="cf-btn1">Start Quiz</Link>
          </div>
          <div className="coffee-content">
            <img src={coffee2} />
            <h2>
              The rarest, most extraordinary coffees Starbucks has to offer
            </h2>
            <p>
              Exceptional coffees from around the world. Sourced for the season,
              roasted at Starbucks Reserve® Roasteries and crafted with care.
            </p>
            <Link className="cf-btn2">Explore Starbucks Reserve®</Link>
          </div>
          <div className="coffee-content">
            <img src={coffee3} />
            <h2>How to brew</h2>
            <p>
              Whether you’re a coffee novice or a seasoned pro, we have all the
              tools you need to bring your brewing game to the next level.
            </p>
            <Link className="cf-btn2">Learn to brew your perfect cup</Link>
          </div>
          <div className="cf-paragraph">
            <p>
              Starbucks and the Starbucks logo are registered trademarks of
              Starbucks Corporation used under license by Nestlé.
              <br />
              <br />
              Keurig, K-Cup, and the Keurig trade dress are trademarks of Keurig
              Green Mountain, Inc., used with permission. Pike Place is a
              registered trademark of The Pike Place Market PDA, used under
              license.
            </p>
          </div>
        </div>
      </div>
      <Footer />;
    </div>
  );
}

export default OurCoffee;
