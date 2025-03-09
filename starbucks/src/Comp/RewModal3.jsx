import React, { useEffect, useState } from "react";
import "./RewModal.css";
import { Link } from "react-router-dom";
import A3free from "./img/3A-free.jpg";
import B3free from "./img/3B-free.jpg";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

// function RewModal3() {
const RewModal3 = ({ isOpen, onClose }) => {
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
  const slides3 = [
    {
      src: A3free,
      header: "Bonus Star challenges",
      text: "Rack up the Stars with regular opportunities to get rewarded for what you love.",
    },
    {
      src: B3free,
      header: "Double Star Days",
      text: "Watch for those special days where you’ll earn twice the Stars on almost everything.",
    },
  ];

  const totalSlides = slides3.length;

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
          <img src={slides3[currentIndex].src} />
          <h2>{slides3[currentIndex].header}</h2>
          <p>{slides3[currentIndex].text}</p>

          {/* Кнопки для переключения слайдов */}
          <div className="slider-buttons">
            {currentIndex > 0 && (
              <button className="prev-button" onClick={moveLeft}>
                <FaAngleLeft />
              </button>
            )}

            <div className="dots-container">
              {slides3.map((_, index) => (
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

export default RewModal3;
