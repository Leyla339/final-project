import React, { useEffect, useState } from "react";
import "./RewModal.css";
import { Link } from "react-router-dom";
import A1fun from "./img/1A-fun.jpg";
import B1fun from "./img/1B-fun.jpg";
import C1fun from "./img/1C-fun.jpg";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

// function RewModal1() {
const RewModal1 = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0); // Сбрасываем слайдер на первый слайд
      document.body.style.overflow = "hidden"; // Блокируем прокрутку фона
    } else {
      document.body.style.overflow = "auto"; // Включаем прокрутку обратно
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Массив слайдов (картинки и текст)
  const slides1 = [
    {
      src: A1fun,
      header: "Free food, drinks & more",
      text: "Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.",
    },
    {
      src: B1fun,
      header: "Complimentary birthday treat",
      text: "Every year on your birthday get a free drink or food item of your choice.",
    },
    {
      src: C1fun,
      header: "Our best offers, all in the app",
      text: "Make the most of every visit. You’ll find chances to earn Bonus Stars and more in your Offers tab.",
    },
  ];

  const totalSlides = slides1.length;

  const moveLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const moveRight = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));

  const setSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <IoCloseOutline className="close-button" onClick={onClose} />

        {/* Контент слайда */}
        <div className="slide-container">
          <img src={slides1[currentIndex].src} />
          <h2>{slides1[currentIndex].header}</h2>
          <p>{slides1[currentIndex].text}</p>

          {/* Кнопки для переключения слайдов */}
          <div className="slider-buttons">
            {currentIndex > 0 && (
              <button className="prev-button" onClick={moveLeft}>
                <FaAngleLeft />
              </button>
            )}

            <div className="dots-container">
              {slides1.map((_, index) => (
                <FaCircle
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
            {/* Скрываем кнопку "Вперёд" на последнем слайде */}
            {currentIndex < totalSlides - 1 ? (
              <button className="next-button" onClick={moveRight}>
                <FaAngleRight />
              </button>
            ) : (
              <button className="ok-button next-button " onClick={onClose}>
                Ok
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// }

export default RewModal1;
