import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MenuAside from "./MenuAside";
import MenuBottom from "./MenuBottom";
import MenuNav from "./MenuNav";
import "./IcedEnergy.css";
import Navbar from "./Navbar";

function IcedEnergy() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Запрос к API
    fetch("http://localhost:3000/iced-energy")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <Navbar />
      <div className="fixed">
        <MenuNav />
        <div className="container4">
          <div className="menu">
            <MenuAside />
            <div className="menu-right hot-coffee-right">
              <h3>
                <Link to="/menu">Menu</Link> / <b>Iced Energy</b>
              </h3>
              <h1>Iced Energy</h1>
              {Object.keys(data).map((category) => (
                <div key={category} className="category2">
                  <h2>{category.replace("-", " ")}</h2>
                  <hr className="menu-line" />
                  <div className="products2 hot-products refreshers-products iced-products">
                    {data[category].map((item) => (
                      <Link to={`/${item.slug}`}>
                        <div className="hot-products-flex">
                          <img src={item.img} />
                          <h2>{item.name}</h2>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MenuBottom />
    </div>
  );
}

export default IcedEnergy;
