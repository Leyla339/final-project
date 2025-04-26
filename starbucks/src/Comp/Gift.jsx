import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Gift.css";
import groupcards from "./img/group-gift-cards.png";
import { GoLinkExternal } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import bulkgift from "./img/bulk-gift-cards.jpg";

const Gift = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  if (!cards) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="gift-cards">
        <div className="gifts-container">
          <h1>Gift cards</h1>
        </div>

        <div className="cards">
          {Object.keys(cards).map((category, index) => (
            <div key={category} className="cards-content">
              <div className="gifts-container">
                <h2>{category.toUpperCase()}</h2>

                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  navigation
                  modules={[Navigation]}
                  className="gift-slider"
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    861: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    1201: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                
                >
                  {cards[category].map((item) => (
                    <SwiperSlide key={item.slug}>
                      <Link to={item.slug}>
                        <img
                          src={item.img}
                          alt={category}
                          className="gift-card-img"
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {index === 0 && (
                <div>
                  <div className="gifts-container">
                    <div className="group-cards">
                      <img src={groupcards} alt="group-cards" />
                      <p>
                        Effortlessly send up to 10 eGifts per purchase. Select a
                        design to start!
                      </p>
                    </div>
                  </div>
                  <div className="add-card-bg">
                    <div className="gifts-container">
                      <div className="add-card">
                        <div className="add-card1">
                          <h3>Received a gift card?</h3>
                          <p>Earns 2★ per $1</p>
                          <Link>Add or reload</Link>
                          <button>Check balance</button>
                        </div>
                        <div className="add-card2">
                          <Link>
                            Card Terms & Conditions
                            <GoLinkExternal className="link-icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="business-gift-bg">
          <div className="gifts-container">
            <div className="business-gift">
              <img src={bulkgift} alt="gift-cards" />
              <div className="business-text">
                <h1>Business gifting — simplified</h1>
                <p>
                  Bulk send physical or digital Starbucks Cards to gift, reward,
                  incentivize, or show appreciation towards your customers,
                  clients and team members. Minimum 15 cards per order.
                </p>
                <Link>
                  Shop now <GoLinkExternal className="link-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="about-gifts-bg">
          <div className="about-gifts">
            <div className="gifts-container about-gifts">
              <div className="about-gifts-part1">
                <h2>About eGift cards</h2>
                <p>
                  A Starbucks eGift card (also known as an “eGift”) is a
                  Starbucks Gift Card that is purchased and sent digitally.{" "}
                  <br />
                  <br /> For Senders of an eGift, go to eGift History when
                  signed in to view, send, or resend eGifts you’ve purchased —
                  or, to directly contact Starbucks eGift Support for help with
                  your order.
                </p>
                <h2>Questions around eGift cards?</h2>
                <p>
                  Check our Frequently Asked Questions — your question might
                  already be answered. There, you’ll find answers for all
                  Starbucks Gift Cards in general (including eGifts).
                </p>
                <Link>
                  Card FAQs <GoLinkExternal className="link-icon" />
                </Link>
              </div>
              <div className="about-gifts-part2">
                <h2>About Starbucks Gift Cards in general</h2>
                <p>
                  Starbucks Gift Cards, including eGifts, can be used to pay in
                  a Starbucks store or to join Starbucks® Rewards. <br /> <br />
                  Register Gift Cards and eGifts to a Starbucks® Rewards account
                  and earn 2★ per dollar every time you pay with that card.
                  Those Stars quickly add up to free food, drinks, and more!
                </p>
                <Link>
                  Card Terms & Conditions
                  <GoLinkExternal className="link-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gift;
