import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-side">
          <div className="logo">
            <img src= "https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="Logo" />
            <span>Online Mobile Recharge</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => onNavClick('home')}>Home</a></li>
          <li><a href="#recharge" onClick={() => onNavClick('recharge')}>Recharge</a></li>
          <li><a href="#about" onClick={() => onNavClick('about')}>About</a></li>
          <li><a href="#contact" onClick={() => onNavClick('contact')}>Contact</a></li>
          <li><Link to="/plans">Plan</Link></li>
        </ul>
        <div className="right-side">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
          <button className="auth-button">Login/Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
