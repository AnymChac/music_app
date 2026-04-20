import React from 'react';
import Song from '../Song/Song';

const SearchResults = ({ canciones, agregarALibreria }) => {
  return (
    <div className="results-container">
      <h2 className="section-title">Resultados de búsqueda</h2>
      <div className="song-list-container">
        {canciones.map((cancion, index) => (
          <Song 
            key={cancion.id}
            numero={index + 1}
            portadaUrl={cancion.portadaUrl}
            titulo={cancion.titulo}
            reproducciones={cancion.reproducciones}
            explicito={cancion.explicito}
            cancion={cancion}
            onAgregar={agregarALibreria}
            esBiblioteca={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;