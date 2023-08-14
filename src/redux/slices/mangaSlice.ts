import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { TManga } from '../../types/types';

interface IFilter {
  name: string;
  type: string;
  genre: string;
}

export const getManga = createAsyncThunk<[], IFilter>(
  'getManga',
  async ({ name, type, genre }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/manga?_limit=8${
          name && `&name_like=${name}`
        }${type && `&type=${type}`}${genre && `&genre=${genre}`}`
      );
      return data;
    } catch (err) {
      let error: AxiosError<PaymentValidationErrors> | any = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: TManga = {
  mangas: [],
  error: null,
  loading: false,
};
export const mangaSlice = createSlice({
  name: 'mangaSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getManga.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getManga.fulfilled, (state, action) => {
      state.mangas = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getManga.rejected, (state) => {
      state.error = `Ошибка при получении данных, попробуйте зайти позже : (`;
      state.loading = false;
    });
  },
});
