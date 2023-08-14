import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TTypes } from '../../types/types';

export const getTypes = createAsyncThunk(
  'getTypes',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/types`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const initialState: TTypes = {
  types: [],
  errorT: null,
  loading: false,
};

export const typesSlice = createSlice({
  name: 'typesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTypes.pending, (state) => {
      state.loading = true;
      state.errorT = null;
    });
    builder.addCase(getTypes.fulfilled, (state, action) => {
      state.types = action.payload;
      state.loading = false;
      state.errorT = null;
    });
    builder.addCase(getTypes.rejected, (state, action) => {
      state.errorT = `${action.payload}`;
      state.loading = false;
    });
  },
});
