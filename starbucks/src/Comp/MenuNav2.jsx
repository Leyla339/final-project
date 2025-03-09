import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MenuNav2.css";

function MenuNav2() {
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
    <div className="menu-nav1">
      <div className="container4">
        <div className="menu-nav menu-nav2">
          <Link to="/menu">menu /</Link>
          <Link to="/menu/drinks/hot-coffee">hot coffee /</Link>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default MenuNav2;
