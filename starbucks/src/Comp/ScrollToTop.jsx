import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Получает текущий путь

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручивает страницу к началу
  }, [pathname]); // Срабатывает при изменении пути
  return null;
}

export default ScrollToTop;
