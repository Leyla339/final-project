import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import featured1 from "./img/featured1.webp";
import featured2 from "./img/featured2.jpg";
import featured3 from "./img/featured3.jpg";
import featured4 from "./img/featured4.jpg";
import featured5 from "./img/featured5.jpg";
import featured6 from "./img/featured6.jpg";
import featured7 from "./img/featured7.jpg";

import "./Featured.css";
import Navbar from "./Navbar";

function Featured() {
  return (
    <div>
      <Navbar />
      <div className="featured">
        <h1>Handcrafted just for you</h1>
        <div className="pistachios">
          <div className="f1-pistachio">
            <img src={featured1} alt="Pistachio Latte" />
            <div className="f1-pistachio-text">
              <h2>Pistachio Latte </h2>
              <p>
                The sweet flavor of pistachio is combined with espresso and
                steamed milk, then finished with a brown-buttery topping.
              </p>
              <Link to="/menu/product/2123404/hot">Order now</Link>
            </div>
          </div>
          <div className="f1-pistachio">
            <img src={featured2} alt="Pistachio Cream Cold Brew" />
            <div className="f1-pistachio-text">
              <h2>Pistachio Latte </h2>
              <p>
                The sweet flavor of pistachio is combined with espresso and
                steamed milk, then finished with a brown-buttery topping.
              </p>
              <Link to="/menu/product/2123702/iced">Order now</Link>
            </div>
          </div>
        </div>
        <div className="refreshers">
          <img src={featured3} />
          <div className="refreshers-content">
            <h2>New Blackberry Sage Refreshers </h2>
            <p>
              Sweet blackberry flavors and notes of sage are shaken with real
              blackberry pieces—enjoyed alone or with lemonade or coconutmilk.
            </p>
            <Link to="/menu/drinks/refreshers">
              See our Seasonal Refreshers
            </Link>
          </div>
        </div>
        <div className="refreshers">
          <div className="refreshers-content">
            <h2>Iced Shaken Espressos</h2>
            <p>
              Starbucks® Blonde espresso combined with hazelnut, brown sugar or
              classic syrup, shaken with ice, then finished with milk or
              oatmilk.
            </p>
            <Link to="/menu/drinks/cold-coffee/iced-shaken-espresso">
              See our Shaken Espressos
            </Link>
          </div>{" "}
          <img src={featured4} />
        </div>
        <div className="pistachios">
          <div className="cortado">
            <img src={featured5} alt="New Cortado" />
            <div className="cortado-text">
              <h2>New Cortado</h2>
              <p>
                Three ristretto shots of Starbucks® Blonde Espresso combined
                with steamed whole milk and served in an 8 fl oz short cup.
              </p>
              <Link to="/menu/product/2124649/hot">Order now</Link>
            </div>
          </div>
          <div className="cortado">
            <img src={featured7} alt="New Brown Sugar Oatmilk Cortado" />
            <div className="cortado-text">
              <h2>New Brown Sugar Oatmilk Cortado</h2>
              <p>
                Three ristretto shots of Starbucks® Blonde Espresso, brown sugar
                syrup, cinnamon and steamed oatmilk in an 8 fl oz short cup.
              </p>
              <Link to="/menu/product/2124651/hot">Order now</Link>
            </div>
          </div>
        </div>
        <div className="refreshers">
          <img src={featured6} />
          <div className="refreshers-content latte-content">
            <h2>Iced Matcha Latte</h2>
            <p>
              Crafted with premium matcha, custom-sweetened and served with milk
              over ice.
            </p>
            <Link to="/menu/product/468/iced">Order Now</Link>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Featured;
