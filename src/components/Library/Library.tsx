import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults.tsx';
// Importamos los estilos desde tu archivo local
import { 
  LibraryContainer, 
  LibraryHeader, 
  EmptyState, 
  EmptyMessage 
} from './styles.ts';

interface LibraryProps {
  albums: any[];
  title?: string;
}

export const Library = ({ albums, title = "Mi Biblioteca" }: LibraryProps) => {
  return (
    <LibraryContainer>
      <LibraryHeader>
        <h2>{title}</h2>
      </LibraryHeader>
      
      {albums && albums.length > 0 ? (
        <SearchResults albums={albums} />
      ) : (
        <EmptyState>
          <EmptyMessage>
            No hay música para mostrar. ¡Inicia una búsqueda!
          </EmptyMessage>
        </EmptyState>
      )}
    </LibraryContainer>
  );
};