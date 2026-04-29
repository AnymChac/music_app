import { useSelector } from 'react-redux';
import { 
  ResultsGrid, 
  AlbumCard, 
  AlbumCover, 
  AlbumTitle, 
  StyledDetailsLink,
  // Componentes de estado que definiremos en styles.ts
  LoadingSpinner, 
  ErrorMessage 
} from './styles.ts';

export const SearchResults = () => {
  // Extraemos los estados que el thunk fetchSongs actualiza automáticamente
  const { results, loading, error } = useSelector((state: any) => state.search);

  // 1. ESTADO: CARGANDO
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <LoadingSpinner /> 
        <p>Buscando música...</p>
      </div>
    );
  }

  // 2. ESTADO: ERROR
  if (error) {
    return (
      <ErrorMessage>
        <h3>Ocurrió un problema</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </ErrorMessage>
    );
  }

  // 3. ESTADO: RESULTADOS
  return (
    <ResultsGrid>
      {results.length > 0 ? (
        results.map((album: any) => (
          <AlbumCard key={album.idAlbum}>
            <AlbumCover 
              src={album.strAlbumThumb || 'https://via.placeholder.com/200'} 
              alt={album.strAlbum} 
            />
            <AlbumTitle>{album.strAlbum}</AlbumTitle>
            <StyledDetailsLink to={`/album/${album.idAlbum}`}>
              Ver detalles
            </StyledDetailsLink>
          </AlbumCard>
        ))
      ) : (
        <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
          No hay resultados. ¡Prueba buscando otro artista!
        </p>
      )}
    </ResultsGrid>
  );
};