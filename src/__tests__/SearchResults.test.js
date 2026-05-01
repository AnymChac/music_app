import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { SearchResults } from '../components/SearchResults/SearchResults';
import searchReducer from '../redux/slices/searchSlice';
import libraryReducer from '../redux/slices/librarySlice';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import store from '../redux/store'; 

// Datos simulados (Mock Data)
const mockAlbums = [
  {
    idAlbum: '1',
    strAlbum: 'Discovery',
    strArtist: 'Daft Punk',
    strAlbumThumb: 'https://via.placeholder.com/150'
  },
  {
    idAlbum: '2',
    strAlbum: 'Random Access Memories',
    strArtist: 'Daft Punk',
    strAlbumThumb: 'https://via.placeholder.com/150'
  }
];

// Configuración de un Store con datos pre-cargados
const createMockStore = (initialSearchState) => {
  return configureStore({
    reducer: {
      search: searchReducer,
      library: libraryReducer,
    },
    preloadedState: {
      search: initialSearchState
    }
  });
};

describe('Pruebas en <SearchResults />', () => {

  test('1. La lista de álbumes se renderiza correctamente con datos simulados', () => {
    const store = createMockStore({
      results: mockAlbums,
      loading: false,
      error: null
    });

    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SearchResults />
            </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );

    // Verificamos que los títulos de los álbumes estén en pantalla
    expect(screen.getByText('Discovery')).toBeInTheDocument();
    expect(screen.getByText('Random Access Memories')).toBeInTheDocument();
  });

  test('2. Cada tarjeta muestra el título y el enlace de detalles', () => {
  // 1. Simulamos que ya hay datos en el store para que se rendericen las tarjetas
  const mockData = [{ idAlbum: '1', strAlbum: 'Album Increíble', strArtist: 'Artista Pro' }];
  store.dispatch({ type: 'search/fetchSongs/fulfilled', payload: mockData });

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}> {/* <-- ESTO REPARA EL ERROR DEL 'large' */}
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <SearchResults />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

    expect(screen.getByText(/Album Increíble/i)).toBeInTheDocument();
    // Verificamos que el link a detalles exista
    const link = screen.getByRole('link', { name: /Ver detalles/i });
    expect(link).toHaveAttribute('href', '/album/1');
  });

  test('3. Muestra mensaje cuando no hay resultados', () => {
  // Creamos un store con resultados vacíos y loading en false
  const emptyStore = configureStore({
    reducer: { search: searchReducer },
    preloadedState: {
      search: { results: [], loading: false, error: null }
    }
  });

  render(
    <Provider store={emptyStore}>
      <ThemeProvider theme={theme}> {/* Esto inyecta theme.spacing.large */}
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <SearchResults />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

    expect(screen.getByText(/no hay resultados/i)).toBeInTheDocument();
  });

  test('4. Muestra el estado de carga (Loading)', () => {
  // Creamos un store que simule el estado cargando: true
  const loadingStore = configureStore({
    reducer: { search: searchReducer },
    preloadedState: {
      search: { results: [], loading: true, error: null }
    }
  });

  render(
    <Provider store={loadingStore}>
      <ThemeProvider theme={theme}> {/* ESTO SOLUCIONA EL ERROR DEL PRIMARY[cite: 3, 10] */}
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <SearchResults />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

    expect(screen.getByText(/Buscando música.../i)).toBeInTheDocument();
  });
});