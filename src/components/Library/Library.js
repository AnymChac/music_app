import React from 'react';
import Song from '../Song/Song';

const Library = ({ canciones }) => {
  return (
    <div className="library-container">
      <h2 className="section-title">Tu Biblioteca</h2>
      <div className="song-list-container">
        {canciones.length === 0 ? (
          <p style={{color: '#b3b3b3', padding: '20px'}}>No hay canciones en tu biblioteca.</p>
        ) : (
          canciones.map((cancion, index) => (
            <Song 
              key={`lib-${cancion.id}`}
              numero={index + 1}
              portadaUrl={cancion.portadaUrl}
              titulo={cancion.titulo}
              reproducciones={cancion.reproducciones}
              explicito={cancion.explicito}
              esBiblioteca={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Library;