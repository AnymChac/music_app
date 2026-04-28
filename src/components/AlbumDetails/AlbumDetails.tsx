import { useParams, Link } from 'react-router-dom';
import { useFetchMusic } from '../../hooks/useFetchMusic.ts';
// Importamos los componentes (asegúrate de agregar los que falten en styles.ts)
import { 
  DetailsContainer, 
  AlbumHeader, 
  AlbumImage, 
  YearTag, 
  InfoSection,
  DescriptionBox,
  TrackList,
  TrackItem,
  StyledLink
} from './styles.ts';

export const AlbumDetails = () => {
  const { id } = useParams();
  
  const urlTracks = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/track.php?m=${id}`;
  const urlAlbum = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`;

  const { data: dataTracks, loading: loadingTracks } = useFetchMusic(urlTracks);
  const { data: dataAlbum, loading: loadingAlbum } = useFetchMusic(urlAlbum);

  if (loadingTracks || loadingAlbum) return <p>Cargando detalles del álbum...</p>;

  const albumInfo = dataAlbum?.album?.[0];
  const tracks = dataTracks?.track || [];

  return (
    <DetailsContainer>
      <StyledLink to="/">← Volver a la búsqueda</StyledLink>
      
      {albumInfo && (
        <>
          <AlbumHeader>
            <AlbumImage 
              src={albumInfo.strAlbumThumb} 
              alt={albumInfo.strAlbum} 
            />
            
            <InfoSection>
              <h1>{albumInfo.strAlbum}</h1>
              <h2>Artista: {albumInfo.strArtist}</h2>
              {/* PASO DE PROPS: Evaluamos si es reciente (post 2020) */}
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
              <p>
                {albumInfo.strDescriptionES || albumInfo.strDescriptionEN}
              </p>
            </DescriptionBox>
          )}
        </>
      )}

      <section>
        <h3>Lista de canciones</h3>
        <TrackList>
          {tracks.map((track: any) => (
            <TrackItem key={track.idTrack}>
              <span>{track.strTrack}</span>
              <StyledLink to={`/song/${track.idTrack}`}>
                Ver detalle →
              </StyledLink>
            </TrackItem>
          ))}
        </TrackList>
      </section>
    </DetailsContainer>
  );
};