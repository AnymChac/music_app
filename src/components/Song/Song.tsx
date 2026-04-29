import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../../redux/slices/librarySlice';
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
  RemoveButtonLarge 
} from './styles.ts';

export const Song = () => {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  
  // Accedemos a la biblioteca desde el slice
  const savedSongs = useSelector((state: any) => state.library);
  
  const url = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/track.php?h=${trackId}`;
  const { data, loading } = useFetchMusic(url);

  if (loading) return <p>Cargando información de la canción...</p>;
  
  const song = data?.track?.[0];

  // Verificamos si ya está en la biblioteca
  const isSaved = savedSongs.some((s: any) => s.idTrack === song?.idTrack);

  const finalImage = song?.strTrackThumb || song?.strAlbumThumb || `https://www.theaudiodb.com/images/media/album/thumb/${song?.idAlbum}.jpg` || 'https://via.placeholder.com/300?text=Sin+Imagen';

  const handleToggleLibrary = () => {
    if (isSaved) {
      dispatch(removeSong(song.idTrack));
    } else {
      dispatch(addSong({
        idTrack: song.idTrack,
        strTrack: song.strTrack,
        strArtist: song.strArtist,
        strAlbum: song.strAlbum,
        strTrackThumb: finalImage
      }));
    }
  };

  return (
    <SongContainer>
      <BackButton onClick={() => window.history.back()}>← Regresar</BackButton>
      {song && (
        <SongCard>
          <SongImage src={finalImage} alt={song.strTrack} />
          <SongTitle>{song.strTrack}</SongTitle>
          <ArtistName>{song.strArtist}</ArtistName>
          <InfoText><strong>Álbum:</strong> {song.strAlbum}</InfoText>
          
          {isSaved ? (
            <RemoveButtonLarge onClick={handleToggleLibrary}>
              Eliminar de la Biblioteca
            </RemoveButtonLarge>
          ) : (
            <AddButtonLarge onClick={handleToggleLibrary}>
              Agregar a la Biblioteca
            </AddButtonLarge>
          )}
        </SongCard>
      )}
    </SongContainer>
  );
};