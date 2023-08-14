import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGenres } from '../../types/types';

export const getGenres = createAsyncThunk(
  'getGenres',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/geners`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const initialState: TGenres = {
  genres: [],
  errorG: null,
  loading: false,
};

export const genresSlice = createSlice({
  name: 'genresSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.loading = true;
      state.errorG = null;
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.loading = false;
      state.errorG = null;
    });
    builder.addCase(getGenres.rejected, (state, action) => {
      state.errorG = `${action.payload}`;
      state.loading = false;
    });
  },
});
