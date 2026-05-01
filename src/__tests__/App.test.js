import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components'; 
import '@testing-library/jest-dom';
import App from '../App';
import searchReducer from '../redux/slices/searchSlice';
import libraryReducer from '../redux/slices/librarySlice';
import { theme } from '../theme'; 

const mockAlbum = { idAlbum: '999', strAlbum: 'Random Album', strArtist: 'Mock Artist' };

describe('Flujo de Integración: Agregar canción y verificar en Library', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        search: searchReducer,
        library: libraryReducer,
      },
      preloadedState: {
        search: { 
          results: [mockAlbum], 
          loading: false, 
          error: null 
        },
        library: [mockAlbum] 
      }
    });
  });

  test('Debe agregar una canción a la biblioteca y mostrarla en la sección Library', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    );

    // 1. Verificar presencia en Home
    expect(screen.getByText(/Random Album/i)).toBeInTheDocument();
    
    // 2. Navegar a detalles
    const detailLink = screen.getByText(/ver detalles/i);
    fireEvent.click(detailLink);

    // 3. Simular clic en agregar (esto dispara lógica de Song.tsx)
    const addButton = await screen.findByText(/Biblioteca/i);
    fireEvent.click(addButton);

    // 4. Navegar a la sección de la Biblioteca
    const libraryNav = screen.getByText(/Mi Biblioteca/i);
    fireEvent.click(libraryNav);

    // 5. Verificación final: Buscamos por texto flexible (Regex)
    await waitFor(() => {
      // Usamos getAllByText o queryByText con regex para evitar errores de nodos divididos
      expect(screen.getByText(/Random Album/i)).toBeInTheDocument();
      expect(screen.getByText(/Mock Artist/i)).toBeInTheDocument();
    });
  });
});