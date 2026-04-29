import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  initialState: [],
  reducers: {
    addSong: (state, action) => { // Eliminamos ": PayloadAction<Song>"
      const exists = state.find(song => song.idTrack === action.payload.idTrack);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeSong: (state, action) => { // Eliminamos ": PayloadAction<string>"
      return state.filter(song => song.idTrack !== action.payload);
    }
  }
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;