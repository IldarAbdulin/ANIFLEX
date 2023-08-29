import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { TManga } from '../../types/types';
import { IGetManga, ISingleManga } from '../../interfaces/interface';

export const getManga = createAsyncThunk<[], IGetManga>(
  'getManga',
  async ({ name, type, genre, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/manga?_limit=8${
          name && `&name_like=${name}`
        }${type !== '' ? `&type=${type}` : ``}${
          genre !== '' ? `&q=${genre}` : ``
        }${page && `&_page=${page}`}`
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

export const getSingleManga = createAsyncThunk<{}, ISingleManga>(
  'getSingleManga',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/manga/${id}`
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
  manga: {},
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
    builder.addCase(getSingleManga.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSingleManga.fulfilled, (state, action) => {
      state.manga = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getSingleManga.rejected, (state) => {
      state.error = `Ошибка при получении данных, попробуйте зайти позже : (`;
      state.loading = false;
    });
  },
});
