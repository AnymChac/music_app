import { useParams, Link } from 'react-router-dom';
import { useFetchMusic } from '../../hooks/useFetchMusic.ts';

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
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'block', marginBottom: '20px' }}>← Volver a la búsqueda</Link>
      
      {albumInfo && (
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <img 
              src={albumInfo.strAlbumThumb} 
              alt={albumInfo.strAlbum} 
              style={{ width: '300px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
            />
            
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h1>{albumInfo.strAlbum}</h1>
              <h2>Artista: {albumInfo.strArtist}</h2>
              <p><strong>Año:</strong> {albumInfo.intYearReleased}</p>
              <p><strong>Género:</strong> {albumInfo.strGenre || 'N/A'}</p>
              <p><strong>Sello:</strong> {albumInfo.strLabel}</p>
            </div>
          </div>

          {/* NUEVA SECCIÓN: Descripción del álbum */}
          {(albumInfo.strDescriptionES || albumInfo.strDescriptionEN) && (
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '8px', 
              borderLeft: '5px solid #007bff',
              lineHeight: '1.6',
              marginBottom: '30px'
            }}>
              <h3 style={{ marginTop: 0 }}>Acerca de este álbum</h3>
              <p style={{ textAlign: 'justify', fontSize: '0.95rem', color: '#333' }}>
                {albumInfo.strDescriptionES || albumInfo.strDescriptionEN}
              </p>
            </div>
          )}
        </div>
      )}

      <section>
        <h3>Lista de canciones</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tracks.map((track: any) => (
            <li key={track.idTrack} style={{ 
              padding: '12px', 
              borderBottom: '1px solid #eee', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{track.strTrack}</span>
              <Link 
                to={`/song/${track.idTrack}`} 
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                Ver detalle →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};