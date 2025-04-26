import React from "react";
// import home1 from "./img/home1.jpg";
// import home2 from "./img/home2.jpg";
// import home3 from "./img/home3.webp";
// import home22 from "./img/home2.2.jpg";
import home31 from "./img/home31.webp";
import home23 from "./img/home2.3.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-bg">
        <div className="home1">
          <div className="home1-content">
            <div className="home1-text">
              <h2>
                {/* The best of <br /> winter */}
                {/* Shaken to perfection */}
                The Spring Edit
              </h2>
              <h3>
                {/* A new winter menu is here, featuring new Cortado alongside
                Pistachio beverages and Matcha Latte—now customized to your
                perfect level of sweetness. */}
                {/* Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso
                or Iced Hazelnut Oatmilk Shaken Espresso—made with Starbucks®
                Blonde Espresso, and just 150 calories for a grande. */}
                Fresh flavors, familiar joy.
              </h3>
              <div className="home1-button">
                <Link to="/menu/featured/">View the menu </Link>
              </div>
            </div>
          </div>{" "}
          <div className="home1-img">
            <img src={home31} />
          </div>
        </div>

        {/* <div className="home1">
          <div className="home1-content">
            <div className="home1-text">
              <h2>
                From the <br /> birthplace of <br /> coffee
              </h2>
              <h3>
                With distinctive floral, tangerine and lemon balm notes,
                Single-Origin Ethiopia is a unique global favorite.
              </h3>
              <div className="home1-button">
                <Link to="/menu/product/2124653/whole-bean">Add to order</Link>
              </div>
            </div>
          </div>
          <div className="home1-img">
            <img src={home2} />
          </div>
        </div> */}

        <div className="home1">
          <div className="home1-img">
            <img src={home23} />
          </div>
          <div className="home2-content">
            <div className="home2-text">
              <h2>It’s a great day for free coffee </h2>
              <h3>
                Start your Starbucks® Rewards journey with a coffee on us. Join
                now and enjoy a free handcrafted drink with a qualifying
                purchase during your first week.*
              </h3>
              <div className="home2-button">
                <Link to="/account/create">Join now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-paragraph">
        <p>
          *Valid for new Starbucks Rewards members for 7 days from sign up.
          Coupon will be available in the offers tab of your Starbucks app
          following sign up and may take up to 48 hours to arrive. Good at
          participating U.S. stores for a handcrafted menu-sized beverage with
          qualifying purchase ($8 max value). Qualifying purchase excludes
          alcohol, Starbucks Card and Card reloads. Limit one. Cannot be
          combined with other offers or discounts. Excludes delivery services.
          Sign up before 3/30/2025.
        </p>
      </div>{" "}
      <Footer />
    </div>
  );
}

export default Home;
