import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">ActiveLife</span>
        </Link>

        

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Главная
          </NavLink>
          <NavLink to="/1.jpg" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Трекер
          </NavLink>
          <NavLink to="/1.jpg" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Тренировки
          </NavLink>
          <NavLink to="/1.jpg" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;