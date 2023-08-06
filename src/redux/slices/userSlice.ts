import { createSlice } from '@reduxjs/toolkit';

type IInitialState = {
  email: null | string;
  token: null | string;
  id: null | string;
};

const initialState: IInitialState = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
