import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Library } from '../components/Library/Library';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import libraryReducer, { addSong, removeSong } from '../redux/slices/librarySlice';

describe('Pruebas en librarySlice', () => {
  
  const initialState = [];
  const mockSong = { 
    idTrack: '123', 
    strTrack: 'Test Song', 
    strArtist: 'Test Artist' 
  };

  test('debe regresar el estado inicial', () => {
    expect(libraryReducer(undefined, { type: '@INIT' })).toEqual(initialState);
  });

  test('addSong: debe agregar una canción nueva', () => {
    const state = libraryReducer(initialState, addSong(mockSong));
    expect(state.length).toBe(1);
    expect(state[0]).toEqual(mockSong);
  });

  // ESTE ES EL TEST QUE TE FALTA PARA LA LÍNEA 9
  test('addSong: no debe agregar una canción si ya existe (Duplicados)', () => {
    const stateConCancion = [mockSong];
    const state = libraryReducer(stateConCancion, addSong(mockSong));
    
    // El "exists" del slice (línea 9) se activa aquí
    expect(state.length).toBe(1); 
  });

  test('removeSong: debe eliminar una canción por idTrack', () => {
    const stateConCancion = [mockSong];
    // Enviamos solo el ID como payload según tu slice
    const state = libraryReducer(stateConCancion, removeSong('123'));
    
    expect(state.length).toBe(0);
  });

  test('Debe llamar a removeSong al hacer clic en el botón de eliminar', () => {
    const mockSong = { idTrack: '123', strTrack: 'Test', strArtist: 'Artist' };
    // Renderizamos con una canción ya existente
    render(
      <Provider store={configureStore({
        reducer: { library: libraryReducer },
        preloadedState: { library: [mockSong] }
      })}>
        <ThemeProvider theme={theme}>
          
            <Library />
          
        </ThemeProvider>
      </Provider>
    );

    const deleteButton = screen.getByRole('button', { name: /eliminar/i });
    fireEvent.click(deleteButton);
    
    // Esto cubrirá la función de la línea 44 y subirá Funcs al 100% en este archivo
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });
});


