import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const HomePage = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="container">
          <h1>ActiveLife</h1>
          <p className="hero-subtitle">Твой путь к здоровым привычкам начинается здесь</p>
          <div className="hero-buttons">
            <Link to="/1.jpg" className="btn btn-primary">Начать трекинг</Link>
            <Link to="/1.jpg" className="btn btn-secondary">Программы тренировок</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Почему выбирают нас?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Привычки на каждый день</h3>
              <p>От зарядки до правильного питания — подбери свой набор привычек</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <h3>Водный баланс</h3>
              <p>Удобный трекер воды с визуальным контролем</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏋️</div>
              <h3>Программы тренировок</h3>
              <p>Для зала, дома и на свежем воздухе</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Расчёт ИМТ</h3>
              <p>Контролируй свой прогресс с помощью индекса массы тела</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Готов изменить свою жизнь?</h2>
          <p>Присоединяйся к тысячам людей, которые уже ведут активный образ жизни с ActiveLife</p>
          <Link to="/1.jpg" className="btn btn-download">Скачать трекер →</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;