// src/components/SearchResults/SearchResults.tsx
import { Link } from 'react-router-dom';

export const SearchResults = ({ albums }: { albums: any[] }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {albums.map((album) => (
        <div key={album.idAlbum} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', width: '200px' }}>
          <img src={album.strAlbumThumb} alt={album.strAlbum} style={{ width: '100%', borderRadius: '4px' }} />
          <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{album.strAlbum}</h3>
          {/* Cambio de texto aquí */}
          <Link 
            to={`/album/${album.idAlbum}`} 
            style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Ver detalles del álbum
          </Link>
        </div>
      ))}
    </div>
  );
};