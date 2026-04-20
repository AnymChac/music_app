import React from 'react';
import './Song.css';

const Song = ({ numero, portadaUrl, titulo, reproducciones, explicito, cancion, onAgregar, esBiblioteca }) => {
  return (
    <div className="song-row">
      <div className="song-rank">{numero}</div>
      <img src={portadaUrl} alt={titulo} className="song-cover" />
      
      <div className="song-details">
        <div className="song-title-row">
          <h3 className="song-title">{titulo}</h3>
          {explicito && <span className="explicit-badge">E</span>}
        </div>
        <p className="song-plays">{reproducciones.toLocaleString('es-ES')}</p>
      </div>
      
      <div className="song-actions">
        {/* Si NO es parte de la biblioteca, mostramos el botón de agregar */}
        {!esBiblioteca && (
          <button className="add-btn" onClick={() => onAgregar(cancion)}>
            + Agregar
          </button>
        )}
        <button className="options-btn">...</button>
      </div>
    </div>
  );
};

export default Song;