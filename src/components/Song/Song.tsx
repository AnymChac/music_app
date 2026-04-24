// src/components/Song/Song.tsx
import { useParams } from 'react-router-dom';
import { useFetchMusic } from '../../hooks/useFetchMusic.ts';

export const Song = () => {
  const { trackId } = useParams();
  const url = `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/track.php?h=${trackId}`;
  const { data, loading } = useFetchMusic(url);

  if (loading) return <p>Cargando información de la canción...</p>;
  
  const song = data?.track?.[0];

  // Función para convertir milisegundos a formato MM:SS
  const formatDuration = (ms: string) => {
    const totalSeconds = Math.floor(parseInt(ms) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <button onClick={() => window.history.back()} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        Regresar a la lista
      </button>

      {song ? (
        <div style={{ maxWidth: '500px', margin: '0 auto', border: '1px solid #ddd', padding: '20px', borderRadius: '12px' }}>
          <img 
            src={song.strTrackThumb || 'https://via.placeholder.com/300?text=Sin+Imagen'} 
            alt={song.strTrack} 
            style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} 
          />
          <h1 style={{ margin: '10px 0' }}>{song.strTrack}</h1>
          <h3 style={{ color: '#555' }}>{song.strArtist}</h3>
          <p><strong>Álbum:</strong> {song.strAlbum}</p>
          
          {/* Nueva sección: Duración */}
          <p style={{ fontSize: '1.2rem', color: '#2ecc71', fontWeight: 'bold' }}>
            Duración: {song.intDuration ? formatDuration(song.intDuration) : 'No disponible'}
          </p>

          {song.strDescriptionEN && (
            <p style={{ textAlign: 'justify', fontSize: '0.9rem', color: '#666', marginTop: '20px' }}>
              {song.strDescriptionEN}
            </p>
          )}
        </div>
      ) : (
        <p>No se encontró información detallada de la canción.</p>
      )}
    </div>
  );
};