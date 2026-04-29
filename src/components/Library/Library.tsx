import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Importamos la acción desde el nuevo slice
import { removeSong } from '../../redux/slices/librarySlice';
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

export const Library = () => {
  // PASO 8: Accedemos al estado específico de la biblioteca en el store
  const myLibrary = useSelector((state: any) => state.library);
  const dispatch = useDispatch();

  return (
    <LibraryContainer>
      <LibraryHeader>
        <h2>Mi Biblioteca Personal</h2>
      </LibraryHeader>

      {myLibrary.length > 0 ? (
        <TrackList>
          {myLibrary.map((song: any) => (
            <TrackItem key={song.idTrack}>
              {/* Mostramos imagen si existe (usando el fallback de la actividad anterior) */}
              <img 
                src={song.strTrackThumb} 
                alt={song.strTrack} 
                style={{ width: '50px', height: '50px', borderRadius: '4px', marginRight: '15px', objectFit: 'cover' }}
              />
              
              <SongInfo>
                <strong>{song.strTrack}</strong>
                <span>{song.strArtist} • {song.strAlbum}</span>
              </SongInfo>

              {/* PASO 8: Despachamos removeSong desde el slice */}
              <RemoveButton onClick={() => dispatch(removeSong(song.idTrack))}>
                Eliminar
              </RemoveButton>
            </TrackItem>
          ))}
        </TrackList>
      ) : (
        <EmptyState>
          <EmptyMessage>No has guardado canciones aún.</EmptyMessage>
        </EmptyState>
      )}
    </LibraryContainer>
  );
};