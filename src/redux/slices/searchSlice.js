import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (artistName) => { // Sin ": string"
    const response = await fetch(`https://corsproxy.io/?https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artistName}`);
    const data = await response.json();
    return data.album || [];
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null, // Solo el valor, sin el "as string"
  },
  reducers: {
    resetResults: (state) => {
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error al obtener resultados";
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;