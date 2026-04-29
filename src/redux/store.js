import { configureStore } from '@reduxjs/toolkit';
// Importamos los reducers de los archivos que creamos antes
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    // Aquí mapeamos cada "pedazo" del estado a su reducer
    library: libraryReducer, // El estado se llamará state.library
    search: searchReducer,   // El estado se llamará state.search
  },
  // Middleware: RTK ya incluye 'thunk' por defecto para las peticiones asíncronas
});

export default store;