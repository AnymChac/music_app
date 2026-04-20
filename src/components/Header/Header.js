import React from 'react';
import './Header.css';
import bannerOzuna from '../../imagen/Ozuna-Header.png';

const Header = () => {
  return (
    <header className="artist-header">
      <div className="banner-container">
          <img src={bannerOzuna} alt="Ozuna Banner" className="banner-img" />
          <button className="back-button">←</button>
      </div>
      
      <div className="artist-info-overlay">
        <h1 className="artist-name">Ozuna</h1>
        <p className="monthly-listeners">51.4 M oyentes mensuales</p>
      </div>
      
      <div className="action-bar">
        <div className="action-buttons-left">
          <button className="following-btn">Siguiendo</button>
          <button className="more-btn">...</button>
        </div>
        <div className="action-buttons-right">
          <button className="shuffle-btn">🔀</button>
          <button className="play-btn-large">▶</button>
        </div>
      </div>
      
      <nav className="artist-nav">
        <a href="#" className="active">Música</a>
        <a href="#">Clips</a>
        <a href="#">Eventos</a>
        <a href="#">Tienda</a>
      </nav>
    </header>
  );
};

export default Header;