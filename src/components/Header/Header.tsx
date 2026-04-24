import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook de navegación

interface HeaderProps {
  onSearch: (artist: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Inicializamos el navegador

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Ejecuta la búsqueda
      navigate('/');   // ¡ESTA ES LA CLAVE! Redirecciona a la raíz
      setQuery('');    // Limpia el buscador (opcional)
    }
  };

  return (
    <header className="main-header">
      <nav>
        <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          MusicApp
        </h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Buscar artista (ej: Ozuna)..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </nav>
    </header>
  );
};