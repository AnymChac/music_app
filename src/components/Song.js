import React, { Component } from 'react';
import './Song.css';

class Song extends Component {
  render() {
    // Extraemos las props
    const { numero, portadaUrl, titulo, reproducciones, explicito } = this.props;

    return (
      <div className="song-row">
        <div className="song-rank">{numero}</div>
        
        {/* Aquí es donde se muestra la imagen */}
        <img src={portadaUrl} alt={titulo} className="song-cover" />
        
        <div className="song-details">
          <div className="song-title-row">
            <h3 className="song-title">{titulo}</h3>
            {explicito && <span className="explicit-badge">E</span>}
          </div>
          <p className="song-plays">{reproducciones.toLocaleString('es-ES')}</p>
        </div>
        
        <div className="song-actions">
          <button className="save-btn">✓</button>
          <button className="options-btn">...</button>
        </div>
      </div>
    );
  }
}

export default Song;