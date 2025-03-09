import React, { useEffect, useState } from "react";
import "./RewModal.css";
import { Link } from "react-router-dom";
import A2order from "./img/2A-order.jpg";
import B2order from "./img/2B-order.jpg";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

// function RewModal2() {
const RewModal2 = ({ isOpen, onClose }) => {
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
  const slides2 = [
    {
      src: A2order,
      header: "Tap, go.",
      text: "Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.",
    },
    {
      src: B2order,
      header: "Just for you",
      text: "Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.",
    },
  ];

  const totalSlides = slides2.length;

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
          <img src={slides2[currentIndex].src} />
          <h2>{slides2[currentIndex].header}</h2>
          <p>{slides2[currentIndex].text}</p>

          {/* Кнопки для переключения слайдов */}
          <div className="slider-buttons">
            {currentIndex > 0 && (
              <button className="prev-button" onClick={moveLeft}>
                <FaAngleLeft />
              </button>
            )}

            <div className="dots-container">
              {slides2.map((_, index) => (
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

export default RewModal2;
