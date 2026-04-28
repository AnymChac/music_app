import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; //
import { theme } from './theme'; // Usamos la exportación nombrada de tu archivo index.js del theme
import { GlobalStyle } from './theme/GlobalStyles'; //

// Importación de componentes
import { Header } from './components/Header/Header.tsx';
import { Library } from './components/Library/Library.tsx';
import { AlbumDetails } from './components/AlbumDetails/AlbumDetails.tsx';
import { Song } from './components/Song/Song.tsx';
import { useFetchMusic } from './hooks/useFetchMusic.ts';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const url = searchTerm 
    ? `https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}` 
    : null;

  const { data, loading, error } = useFetchMusic(url);

 return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header onSearch={(artist) => setSearchTerm(artist)} />
        <Routes>
          <Route 
            path="/" 
            element={<Library albums={data?.album || []} title={searchTerm} />} 
          />

          <Route path="/my-library" element={<Library isPersonal={true} />} />
          
          <Route path="/album/:id" element={<AlbumDetails />} />
          <Route path="/song/:trackId" element={<Song />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;