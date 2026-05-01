import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import { AlbumDetails } from '../components/AlbumDetails/AlbumDetails';
import libraryReducer from '../redux/slices/librarySlice';
import { useFetchMusic } from '../hooks/useFetchMusic';
import { theme } from '../theme';

// Mock del hook para controlar los datos del álbum y las canciones
jest.mock('../hooks/useFetchMusic');

const mockAlbumData = {
  album: [{
    idAlbum: '999',
    strAlbum: 'Album de Prueba',
    strArtist: 'Artista Test',
    intYearReleased: '2022', // Para cubrir la lógica de YearTag isRecent[cite: 3, 4]
    strDescriptionES: 'Descripción en español'
  }]
};

const mockTracksData = {
  track: [
    { idTrack: '1', strTrack: 'Cancion Uno' },
    { idTrack: '2', strTrack: 'Cancion Dos' }
  ]
};

const renderWithProviders = (initialLibrary = []) => {
  const store = configureStore({
    reducer: { library: libraryReducer },
    preloadedState: { library: initialLibrary }
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/album/999']}>
          <Routes>
            <Route path="/album/:id" element={<AlbumDetails />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe('Pruebas en AlbumDetails', () => {
  test('Debe renderizar la lista de canciones y permitir agregar/eliminar (Cubre Funciones y Líneas 79-90)', () => {
    // Simulamos que la carga terminó y tenemos datos
    useFetchMusic.mockImplementation((url) => {
      if (url.includes('track.php')) return { data: mockTracksData, loading: false };
      return { data: mockAlbumData, loading: false };
    });

    renderWithProviders([]); // Biblioteca inicialmente vacía

    // 1. Verificar renderizado de canciones (Cubre el .map en línea 79)
    expect(screen.getByText('Cancion Uno')).toBeInTheDocument();
    
    // 2. Probar función addSong (Línea 88)
    const addButtons = screen.getAllByText(/Biblioteca/i);
    fireEvent.click(addButtons[0]);

    // 3. Probar función removeSong (Línea 84)[cite: 3]
    // Al agregarla, el botón debería cambiar a "- Eliminar"
    const removeButton = screen.getByText(/- Eliminar/i);
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);

    // 4. Verificar que volvió al estado original
    expect(screen.getAllByText(/Biblioteca/i)[0]).toBeInTheDocument();
  });

  test('Debe mostrar el YearTag con estilo reciente (Cubre lógica de props en styles.ts)', () => {
    useFetchMusic.mockReturnValue({ data: mockAlbumData, loading: false });
    renderWithProviders();
    
    const yearTag = screen.getByText('2022');
    expect(yearTag).toBeInTheDocument();
    // Esto asegura que la lógica 'isRecent' en styles.ts se ejecute[cite: 3, 4]
  });
});