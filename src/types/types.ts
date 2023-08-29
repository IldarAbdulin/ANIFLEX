import { IGenres, IManga, ITypes } from '../interfaces/interface';

type TRoutesChilder = {
  path: string;
  element: React.ReactElement;
};

export type TPublicRoutes = {
  children: TRoutesChilder[];
};

export type THomeSignUp = {
  setActive: (active: boolean) => void;
  onSignInFormActive: () => void;
};
export type THomeLogin = {
  setActive: (a: boolean) => void;
  onRegistrationFormActive: () => void;
};

export type TMangaFilter = {
  name: string;
  setName: (e: string) => void;
  type: string;
  setType: (e: string) => void;
  genre: string;
  setGenre: (e: string) => void;
  resetGenres: () => void;
  resetTypes: () => void;
};

export type TManga = {
  mangas: IManga[];
  manga: IManga;
  loading: boolean;
  error: null | string;
  name?: string;
};
export type TTypes = {
  types: ITypes[];
  errorT: null | string;
  loading: boolean;
};
export type TGenres = {
  genres: IGenres[];
  errorG: null | string;
  loading: boolean;
};

export type TMangaMenu = {
  setActive: (act: boolean) => void;
};
