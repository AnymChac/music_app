import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Song } from '../components/Song/Song';
import libraryReducer from '../redux/slices/librarySlice';
import { useFetchMusic } from '../hooks/useFetchMusic';
import { theme } from '../theme';
jest.mock('../hooks/useFetchMusic');

const mockSongData = {
  track: [{
    idTrack: '12345',
    strTrack: 'Cancion de Prueba',
    strArtist: 'Mock Artist',
    strAlbum: 'Random Album',
    strTrackThumb: 'test-image.jpg',
    idAlbum: '999'
  }]
};

const renderWithProviders = (initialState = []) => {
  const store = configureStore({
    reducer: { library: libraryReducer },
    preloadedState: { library: initialState }
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/song/12345']}>
          <Routes>
            <Route path="/song/:trackId" element={<Song />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe('Componente Song', () => {
  test('Debe mostrar el estado de carga (Cubre línea 29)', () => {
    useFetchMusic.mockReturnValue({ data: null, loading: true });
    renderWithProviders();
    expect(screen.getByText(/Cargando información/i)).toBeInTheDocument();
  });

  test('Debe renderizar la información de la canción y agregarla (Cubre líneas 31-48)', () => {
    useFetchMusic.mockReturnValue({ data: mockSongData, loading: false });
    renderWithProviders([]); // Iniciamos con biblioteca vacía

    expect(screen.getByText('Cancion de Prueba')).toBeInTheDocument();
    
    const addButton = screen.getByRole('button', { name: /Agregar a la Biblioteca/i });
    fireEvent.click(addButton);

    // Tras el clic, el componente se re-renderiza y debería mostrar el botón de eliminar
    expect(screen.getByRole('button', { name: /Eliminar de la Biblioteca/i })).toBeInTheDocument();
  });

  test('Debe eliminar la canción si ya existe (Cubre líneas 37-41)', () => {
    useFetchMusic.mockReturnValue({ data: mockSongData, loading: false });
    
    // Iniciamos con la canción ya guardada en el estado
    renderWithProviders([{ idTrack: '12345', strTrack: 'Cancion de Prueba' }]);

    const removeButton = screen.getByRole('button', { name: /Eliminar de la Biblioteca/i });
    fireEvent.click(removeButton);

    // Debería volver a mostrar el botón de agregar
    expect(screen.getByRole('button', { name: /Agregar a la Biblioteca/i })).toBeInTheDocument();
  });

  test('El botón regresar debe llamar a history.back (Cubre línea 56)', () => {
    const backSpy = jest.spyOn(window.history, 'back').mockImplementation(() => {});
    useFetchMusic.mockReturnValue({ data: mockSongData, loading: false });
    renderWithProviders();

    fireEvent.click(screen.getByText(/Regresar/i));
    expect(backSpy).toHaveBeenCalled();
    backSpy.mockRestore();
  });
});