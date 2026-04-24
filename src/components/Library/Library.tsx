import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults.tsx';

interface LibraryProps {
  albums: any[];
  title?: string;
}

export const Library = ({ albums, title = "Mi Biblioteca" }: LibraryProps) => {
  return (
    <section className="library-container">
      <header>
        <h2>{title}</h2>
      </header>
      
      {albums && albums.length > 0 ? (
        <SearchResults albums={albums} />
      ) : (
        <div className="empty-state">
          <p>No hay música para mostrar. ¡Inicia una búsqueda!</p>
        </div>
      )}
    </section>
  );
};