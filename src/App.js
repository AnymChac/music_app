import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header.tsx';
import { Library } from './components/Library/Library.tsx';
import { AlbumDetails } from './components/AlbumDetails/AlbumDetails.tsx'; // Renombrado
import { Song } from './components/Song/Song.tsx';
import { useFetchMusic } from './hooks/useFetchMusic.ts';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const url = searchTerm 
    ? `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}` 
    : null;

  const { data, loading, error } = useFetchMusic(url);

  return (
    <Router>
      <Header onSearch={(artist) => setSearchTerm(artist)} />
      <Routes>
        <Route path="/" element={<Library albums={data?.album || []} title={searchTerm} />} />
        <Route path="/album/:id" element={<AlbumDetails />} />
        <Route path="/song/:trackId" element={<Song />} />
        <Route 
        path="/" 
        element={
            <Library 
            albums={data?.album || []} 
            title={searchTerm ? `Resultados para: ${searchTerm}` : "Busca tus artistas favoritos"} 
            />
        } 
        />
      </Routes>
    </Router>
  );
}
export default App;