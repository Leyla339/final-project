import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Rewards.css";
import Modal1 from "./RewModal1";
import Modal2 from "./RewModal2";
import Modal3 from "./RewModal3";
import fun from "./img/1-fun-freebies.jpg";
import order from "./img/2-order-and-pay-ahead.jpg";
import free from "./img/3-get-to-free-faster.jpg";
import Navbar from "./Navbar";
// function Rew2() {
const Rew2 = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  return (
    <div>
      <div className="rewards3">
        <div className="rewards3-content">
          <h1>Endless Extras</h1>
          <h2>
            Joining Starbucks® Rewards means unlocking access to benefits like
            quick and <br /> easy ordering, tasty Rewards and—yes, free coffee.
          </h2>
        </div>
        <div className="rewards3-cards">
          <div className="rewards3-card">
            <img src={fun} />
            <h2>Fun freebies</h2>
            <p>
              Not only can you earn free food, drinks and more, look forward to
              a birthday treat on us.
            </p>
            <Link onClick={() => setModal1Open(true)}>Learn More</Link>
            <Modal1 isOpen={modal1Open} onClose={() => setModal1Open(false)} />
          </div>
          <div className="rewards3-card">
            <img src={order} />
            <h2>Order & pay ahead</h2>
            <p>
              Master the art of ordering ahead with saved favorites and payment
              methods.
            </p>
            <Link onClick={() => setModal2Open(true)}>Learn More</Link>
            <Modal2 isOpen={modal2Open} onClose={() => setModal2Open(false)} />
          </div>
          <div className="rewards3-card">
            <img src={free} />
            <h2>Get to free faster</h2>
            <p>
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
            </p>
            <Link onClick={() => setModal3Open(true)}>Learn More</Link>
            <Modal3 isOpen={modal3Open} onClose={() => setModal3Open(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}; 
// };

export default Rew2;
