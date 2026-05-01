import searchReducer, { resetResults, fetchSongs } from '../redux/slices/searchSlice';

describe('searchSlice', () => {
  // Test 1: Probar un reducer normal (sincrónico)
  test('debe limpiar resultados con resetResults', () => {
    const initialState = { results: ['data'], loading: false, error: null };
    const state = searchReducer(initialState, resetResults());
    expect(state.results).toEqual([]); // Cubre la línea de resetResults
  });

  // Test 2: Probar el estado PENDING de la petición
  test('debe manejar fetchSongs.pending', () => {
    const action = { type: fetchSongs.pending.type };
    const state = searchReducer(undefined, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull(); // Cubre líneas 27-29
  });

  // Test 3: Probar el estado FULFILLED (cuando llegan datos)
  test('debe manejar fetchSongs.fulfilled', () => {
    const mockPayload = [{ idAlbum: '1', strAlbum: 'Album Test' }];
    const action = { type: fetchSongs.fulfilled.type, payload: mockPayload };
    const state = searchReducer(undefined, action);
    
    expect(state.loading).toBe(false);
    expect(state.results).toEqual(mockPayload); // Cubre líneas 31-33
  });

  // Test 4: Probar el estado REJECTED (cuando hay error)
  test('debe manejar fetchSongs.rejected', () => {
    const action = { type: fetchSongs.rejected.type };
    const state = searchReducer(undefined, action);
    
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Error al obtener resultados"); // Cubre líneas 34-36[cite: 3]
  });

  test('debe manejar el inicio de la búsqueda', () => {
  const action = { type: fetchSongs.pending.type };
  const state = searchReducer(undefined, action);
  expect(state.loading).toBe(true); // Esto cubre la línea 7-8[cite: 3]
});
});