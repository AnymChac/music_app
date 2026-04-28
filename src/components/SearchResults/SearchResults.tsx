import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/libraryActions';
import { 
  ResultsGrid, 
  AlbumCard, 
  AlbumCover, 
  AlbumTitle, 
  StyledDetailsLink,
  AddButton // Nuevo componente de estilo
} from './styles.ts';

export const SearchResults = ({ albums }: { albums: any[] }) => {
  const dispatch = useDispatch();

  const handleAdd = (album: any) => {
    const songData = {
      idTrack: album.idAlbum,
      strTrack: album.strAlbum,
      strArtist: album.strArtist,
      strAlbum: album.strAlbum,
      strTrackThumb: album.strAlbumThumb
    };
    dispatch(addSong(songData));
  };

  return (
    <ResultsGrid>
      {albums.map((album) => (
        <AlbumCard key={album.idAlbum}>
          <AlbumCover 
            src={album.strAlbumThumb || 'https://via.placeholder.com/200'} 
            alt={album.strAlbum} 
          />
          <AlbumTitle>{album.strAlbum}</AlbumTitle>
          

          <StyledDetailsLink to={`/album/${album.idAlbum}`}>
            Ver detalles del álbum
          </StyledDetailsLink>
        </AlbumCard>
      ))}
    </ResultsGrid>
  );
};