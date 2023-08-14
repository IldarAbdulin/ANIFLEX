import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { mangaSlice } from './slices/mangaSlice';
import { typesSlice } from './slices/typesSlice';
import { genresSlice } from './slices/genresSlice';

const reducers = combineReducers({
  manga: mangaSlice.reducer,
  types: typesSlice.reducer,
  genres: genresSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
