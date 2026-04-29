import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// PASO 6: Importar las acciones desde el Slice de Redux Toolkit
import { addSong, removeSong } from '../../redux/slices/librarySlice'; 
import { useFetchMusic } from '../../hooks/useFetchMusic.ts';
import { 
  DetailsContainer, 
  AlbumHeader, 
  AlbumImage, 
  YearTag, 
  InfoSection,
  DescriptionBox,
  TrackList,
  TrackItem,
  StyledLink,
  ActionButtons,
  AddTrackButton,
  RemoveTrackButton
} from './styles.ts';

export const AlbumDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // PASO 6: Acceder al estado específico de 'library'
  const savedSongs = useSelector((state: any) => state.library);
  
  const urlTracks = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/track.php?m=${id}`;
  const urlAlbum = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`;

  const { data: dataTracks, loading: loadingTracks } = useFetchMusic(urlTracks);
  const { data: dataAlbum, loading: loadingAlbum } = useFetchMusic(urlAlbum);

  if (loadingTracks || loadingAlbum) return <p>Cargando detalles del álbum...</p>;

  const albumInfo = dataAlbum?.album?.[0];
  const tracks = dataTracks?.track || [];
  const albumThumb = albumInfo?.strAlbumThumb;

  return (
    <DetailsContainer>
      <StyledLink to="/">← Volver a la búsqueda</StyledLink>
      
      {albumInfo && (
        <>
          <AlbumHeader>
            <AlbumImage 
              src={albumInfo.strAlbumThumb || 'https://via.placeholder.com/300?text=Sin+Portada'} 
              alt={albumInfo.strAlbum} 
            />
            <InfoSection>
              <h1>{albumInfo.strAlbum}</h1>
              <h2>Artista: {albumInfo.strArtist}</h2>
              <p>
                <strong>Año:</strong> 
                <YearTag isRecent={parseInt(albumInfo.intYearReleased) > 2020}>
                  {albumInfo.intYearReleased}
                </YearTag>
              </p>
              <p><strong>Género:</strong> {albumInfo.strGenre || 'N/A'}</p>
              <p><strong>Sello:</strong> {albumInfo.strLabel}</p>
            </InfoSection>
          </AlbumHeader>

          {(albumInfo.strDescriptionES || albumInfo.strDescriptionEN) && (
            <DescriptionBox>
              <h3>Acerca de este álbum</h3>
              <p>{albumInfo.strDescriptionES || albumInfo.strDescriptionEN}</p>
            </DescriptionBox>
          )}
        </>
      )}

      <section>
        <h3>Lista de canciones</h3>
        <TrackList>
          {tracks.map((track: any) => {
            // Verificamos si la canción ya está en la biblioteca
            const isSaved = savedSongs.some((s: any) => s.idTrack === track.idTrack);

            return (
              <TrackItem key={track.idTrack}>
                <span>{track.strTrack}</span>
                <ActionButtons>
                  {isSaved ? (
                    <RemoveTrackButton onClick={() => dispatch(removeSong(track.idTrack))}>
                      - Eliminar
                    </RemoveTrackButton>
                  ) : (
                    <AddTrackButton onClick={() => dispatch(addSong({
                      ...track,
                      strTrackThumb: track.strTrackThumb || albumThumb
                    }))}>
                      + Biblioteca
                    </AddTrackButton>
                  )}
                  <StyledLink to={`/song/${track.idTrack}`}>Ver detalle →</StyledLink>
                </ActionButtons>
              </TrackItem>
            );
          })}
        </TrackList>
      </section>
    </DetailsContainer>
  );
};