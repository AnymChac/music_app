import libraryReducer, { addSong, removeSong } from '../redux/slices/librarySlice';


describe('Redux Library Slice', () => {
  test('debe agregar una canción', () => {
    const initialState = [];
    const song = { idTrack: '1', strTrack: 'Test' };
    const state = libraryReducer(initialState, addSong(song));
    expect(state.length).toBe(1);
    expect(state[0].strTrack).toBe('Test');
  });

  test('debe eliminar una canción', () => {
    const initialState = [{ idTrack: '1' }];
    const state = libraryReducer(initialState, removeSong('1'));
    expect(state.length).toBe(0);
  });
  test('no debe agregar duplicados', () => {
    const song = { idTrack: '123' };
    const state = libraryReducer([song], addSong(song));
    expect(state.length).toBe(1); // Esto cubre la validación 'if (!exists)'[cite: 2]
    });
});

