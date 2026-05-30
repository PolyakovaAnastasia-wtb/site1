import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>ActiveLife</h3>
          <p>Ваш персональный трекер полезных привычек</p>
        </div>
        <div className="footer-section">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/1.jpg">Трекер</a></li>
            <li><a href="/1.jpg">Тренировки</a></li>
            <li><a href="/1.jpg">Контакты</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>📧 support@activelife.ru</p>
          <p>📞 +7 (999) 123-45-67</p>
          <div className="social-links">
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🎵</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ActiveLife. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;