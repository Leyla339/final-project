import React, { useState } from "react";
import MenuNav2 from "./MenuNav2";
import "./CaffeMisto.css";
import Footer from "./Footer";
import MenuBottom from "./MenuBottom";
import { CiCircleInfo } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";
import { SlMagicWand } from "react-icons/sl";
import Navbar from "./Navbar";

function CaffeMisto() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Short");

  const sizes = [
    {
      name: "Short",
      volume: "8 fl oz",
      defaultImage:
        "https://www.starbucks.com/app-assets/0295bad53506b2b3c22b.svg",
      selectedImage:
        "https://www.starbucks.com/app-assets/06ea008c02e29bbc7f8f.svg",
    },
    {
      name: "Tall",
      volume: "12 fl oz",
      defaultImage:
        "https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d.svg",
      selectedImage:
        "https://www.starbucks.com/app-assets/8f80d6b33459b4fada56.svg",
    },
    {
      name: "Grande",
      volume: "16 fl oz",
      defaultImage:
        "https://www.starbucks.com/app-assets/f1c3892d2d28cade899a.svg",
      selectedImage:
        "https://www.starbucks.com/app-assets/a35163e609f2058eee27.svg",
    },
    {
      name: "Venti",
      volume: "20 fl oz",
      defaultImage:
        "https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f0.svg",
      selectedImage:
        "https://www.starbucks.com/app-assets/f3bd2f05578777d6c1a6.svg",
    },
  ];
  const handleSizeChange = (size) => {
    setSelectedSize(size.name);
  };

  return (
    <div>
      <Navbar />
      <MenuNav2 />
      <div className="coffee-info">
        <div className="coffee-main">
          <img
            src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630"
            alt="Caffè Misto"
          />
          <div className="coffee-name">
            <h2>Caffè Misto</h2>
            <p>
              110 calories{" "}
              <CiCircleInfo
                className="info-icon"
                onClick={() => setIsPopupOpen(true)}
              />
            </p>
          </div>
        </div>
        <div className="container4">
          <div className="coffee-desc">
            <div className="coffee-size">
              <h2>Size options</h2>
              <hr />
              <div className="coffee-size-cards">
                {sizes.map((size) => (
                  <div key={size.name} className="size-card">
                    <div
                      className={`size-image ${
                        selectedSize === size.name ? "selected" : ""
                      }`}
                      onClick={() => setSelectedSize(size.name)}
                    >
                      <img
                        src={
                          selectedSize === size.name
                            ? size.selectedImage
                            : size.defaultImage
                        }
                        alt={`${size.name} size`}
                      />
                    </div>
                    <h3>{size.name}</h3>
                    <p>{size.volume}</p>
                  </div>
                ))}
              </div>

              <p className="coffee-loc-p">
                <SlLocationPin className="coffee-loc" />
                Select a store to view availability
              </p>
            </div>
            <div className="coffee-includes">
              <h2>What's included</h2>
              <hr />
              <div class="select-container">
                <p className="select-label">Milk</p>
                <select id="milk">
                  <option disabled>Milk</option>
                  <option value="2%" selected>
                    2% Milk
                  </option>
                  <option value="almond">Almond</option>
                  <option value="coconut">Coconut</option>
                  <option value="breve">Breve (Half & Half)</option>
                  <option value="cream">Heavy Cream</option>
                  <option value="nonfat">Nonfat Milk</option>
                  <option value="oatmilk">Oatmilk</option>
                  <option value="soy">Soy</option>
                  <option value="nondairy">Nondairy Vanilla Sweet Cream</option>
                  <option value="vanilla">Vanilla Sweet Cream</option>
                  <option value="whole">Whole Milk</option>
                </select>
                <FaAngleDown className="select-icon" />
              </div>
              <div class="select-container">
                <p className="select-label">Milk</p>
                <select id="milk">
                  <option disabled>Milk</option>
                  <option value="extra-foam">Extra Foam</option>
                  <option value="foam" selected>
                    Faom
                  </option>
                  <option value="ligh-foam">Light Foam</option>
                  <option value="no-foam">No Foam</option>
                </select>
                <FaAngleDown className="select-icon" />
              </div>
              <div class="select-container">
                <p className="select-label">Milk</p>
                <select id="milk">
                  <option disabled>Milk</option>
                  <option value="steamed-hot" selected>
                    Steamed Hot{" "}
                  </option>
                  <option value="hot">Hot</option>
                  <option value="warm">Warm</option>
                </select>
                <FaAngleDown className="select-icon" />
              </div>
              <button className="customize">
                <SlMagicWand className="magic-icon" />
                Customize
              </button>
            </div>
          </div>
        </div>

        <div className="bg-bottom-coffee">
          <div className="container4">
            <p className="bottom-stars">200★ item</p>
            <p className="bottom-coffee-p">
              A one-to-one combination of fresh-brewed coffee and steamed milk
              add up to one distinctly delicious coffee drink remarkably mixed.
            </p>
            <p className="coffee-ingr">
              110 calories, 10g sugar, 4g fat{" "}
              <CiCircleInfo
                className="info-icon"
                onClick={() => setIsPopupOpen2(true)}
              />
            </p>
            <button className="ingr-list">
              Full nutrition & ingredients list
            </button>
          </div>
        </div>

        <button className="coffee-add-order">Add to Order</button>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <BsStars className="stars" />
          <p>
            Information is based on standard recipes and does not reflect
            customizations
          </p>
          <hr />
          <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
            &times;
          </button>
        </div>
      )}
      {isPopupOpen2 && (
        <div className="popup2">
          <BsStars className="stars" />
          <p>
            Information is based on standard recipes and does not reflect
            customizations
          </p>
          <hr />
          <button className="close-btn" onClick={() => setIsPopupOpen2(false)}>
            &times;
          </button>
        </div>
      )}

      <MenuBottom />
      <Footer />
    </div>
  );
}

export default CaffeMisto;
