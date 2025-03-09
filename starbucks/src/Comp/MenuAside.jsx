import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function MenuAside() {
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
      <div className="menu-left">
        <div className="categories">
          {/* Обрабатываем данные для каждой категории */}
          {Object.keys(data).map((category) => (
            <div key={category} className="category">
              <h2>{category.replace("-", " ")}</h2>
              <div className="products">
                {data[category].map((item) => (
                  <Link to={`/${item.slug}`}>{item.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuAside;
