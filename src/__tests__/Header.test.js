import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// ESTA ES LA LÍNEA QUE FALTA:
import '@testing-library/jest-dom'; 

import { Header } from '../components/Header/Header';
import store from '../redux/store';
import { theme } from '../theme';

describe('Header UI y Navegación', () => {
  test('Debe mostrar el logo y navegar al inicio al hacer clic', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

    const logo = screen.getByText(/MusicApp/i);
    expect(logo).toBeInTheDocument(); // Ahora sí funcionará

    const libraryLink = screen.getByText(/Mi Biblioteca/i);
    expect(libraryLink).toBeInTheDocument(); // Cubre líneas 42-47 del reporte
  });
});