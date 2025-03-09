import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import MenuNav from "./MenuNav";
import { Link } from "react-router-dom";
import MenuBottom from "./MenuBottom";
import "./Menu.css";
import MenuAside from "./MenuAside";
import Navbar from "./Navbar";

const Menu = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Запрос к API
    fetch("http://localhost:3000/menu")
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
            <div className="menu-right">
              <h1>Menu</h1>
              {Object.keys(data).map((category) => (
                <div key={category} className="category2">
                  <h2>{category.replace("-", " ")}</h2>
                  <hr className="menu-line" />
                  <div className="products2">
                    {data[category].map((item) => (
                      <Link to={`/${item.slug}`}>
                        <div className="products-flex">
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
};
export default Menu;
