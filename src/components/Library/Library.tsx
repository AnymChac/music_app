import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';
import { SearchResults } from '../SearchResults/SearchResults.tsx';
import { 
  LibraryContainer, 
  LibraryHeader, 
  TrackList, 
  TrackItem, 
  RemoveButton, 
  SongInfo,
  EmptyState,
  EmptyMessage 
} from './styles.ts';

interface LibraryProps {
  albums?: any[]; // Para la búsqueda
  title?: string;
  isPersonal?: boolean; // Para saber si es la de Redux
}

export const Library = ({ albums, title, isPersonal = false }: LibraryProps) => {
  const myLibrary = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // Si es la biblioteca personal de Redux
  if (isPersonal) {
    return (
      <LibraryContainer>
        <LibraryHeader><h2>Mi Colección</h2></LibraryHeader>
        {myLibrary.length > 0 ? (
          <TrackList>
            {myLibrary.map((song: any) => (
              <TrackItem key={song.idTrack}>
                <SongInfo>
                  <strong>{song.strTrack}</strong>
                  <span>{song.strArtist}</span>
                </SongInfo>
                <RemoveButton onClick={() => dispatch(removeSong(song.idTrack))}>
                  Eliminar
                </RemoveButton>
              </TrackItem>
            ))}
          </TrackList>
        ) : (
          <EmptyState><EmptyMessage>No has guardado nada aún.</EmptyMessage></EmptyState>
        )}
      </LibraryContainer>
    );
  }

  // Si es la vista de búsqueda normal
  return (
    <LibraryContainer>
      <LibraryHeader><h2>{title || "Explorar"}</h2></LibraryHeader>
      {albums && albums.length > 0 ? (
        <SearchResults albums={albums} />
      ) : (
        <EmptyState><EmptyMessage>Busca un artista para empezar.</EmptyMessage></EmptyState>
      )}
    </LibraryContainer>
  );
};