import { 
  ResultsGrid, 
  AlbumCard, 
  AlbumCover, 
  AlbumTitle, 
  StyledDetailsLink 
} from './styles.ts';

export const SearchResults = ({ albums }: { albums: any[] }) => {
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