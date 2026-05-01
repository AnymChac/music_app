import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header/Header'; 
import { theme } from '../theme';
import searchReducer from '../redux/slices/searchSlice';
import libraryReducer from '../redux/slices/librarySlice';

const store = configureStore({
  reducer: { search: searchReducer, library: libraryReducer }
});

describe('Funcionalidad de Búsqueda (dentro de Header)', () => {
  test('Debe ejecutar onSearch con el término correcto cuando se envía el formulario', () => {
    const mockOnSearch = jest.fn();
    
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header onSearch={mockOnSearch} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const input = screen.getByPlaceholderText(/Buscar artista.../i);
    const button = screen.getByRole('button', { name: /buscar/i });

    // Simular escritura y envío
    fireEvent.change(input, { target: { value: 'Gorillaz' } });
    fireEvent.click(button);

    // Verificamos que la función que pasamos por props se ejecutó
    expect(mockOnSearch).toHaveBeenCalledWith('Gorillaz');
  });
});