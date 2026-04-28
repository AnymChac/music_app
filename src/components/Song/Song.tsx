import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../../redux/libraryActions';
import { useFetchMusic } from '../../hooks/useFetchMusic.ts';
import { 
  SongContainer, 
  BackButton, 
  SongCard, 
  SongImage, 
  SongTitle, 
  ArtistName, 
  InfoText, 
  DurationText,
  AddButtonLarge,
  RemoveButtonLarge,
} from './styles.ts';

export const Song = () => {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  const savedSongs = useSelector((state: any) => state);
  
  const url = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/track.php?h=${trackId}`;
  const { data, loading } = useFetchMusic(url);

  if (loading) return <p>Cargando información de la canción...</p>;
  
  const song = data?.track?.[0];
  const isSaved = savedSongs.some((s: any) => s.idTrack === song?.idTrack);
  const finalImage = song?.strTrackThumb || song?.strAlbumThumb || `https://www.theaudiodb.com/images/media/album/thumb/${song?.idAlbum}.jpg` || 'https://via.placeholder.com/300?text=Sin+Imagen';

  const formatDuration = (ms: string) => {
    const totalSeconds = Math.floor(parseInt(ms) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleToggleLibrary = () => {
    if (isSaved) {
      dispatch(removeSong(song.idTrack));
    } else {
      dispatch(addSong({
        ...song,
        strTrackThumb: finalImage
      }));
    }
  };

  return (
    <SongContainer>
      <BackButton onClick={() => window.history.back()}>
        ← Regresar a la lista
      </BackButton>

      {song ? (
        <SongCard>
          <SongImage 
            src={song.strTrackThumb || song.strAlbumThumb || 'https://via.placeholder.com/300?text=Sin+Imagen'} 
            alt={song.strTrack} 
          />
          <SongTitle>{song.strTrack}</SongTitle>
          <ArtistName>{song.strArtist}</ArtistName>
          <InfoText><strong>Álbum:</strong> {song.strAlbum}</InfoText>
          
          <DurationText>
            Duración: {song.intDuration ? formatDuration(song.intDuration) : 'No disponible'}
          </DurationText>

          {isSaved ? (
            <RemoveButtonLarge onClick={handleToggleLibrary}>
              Eliminar de mi Biblioteca
            </RemoveButtonLarge>
          ) : (
            <AddButtonLarge onClick={handleToggleLibrary}>
              Agregar a mi Biblioteca
            </AddButtonLarge>
          )}
        </SongCard>
      ) : (
        <p>No se encontró información de la canción.</p>
      )}
    </SongContainer>
  );
};