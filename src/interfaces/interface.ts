export interface IContext {
  isLight: boolean;
  setIsLight?: (arg: boolean) => void;
}
export interface IManga {
  id?: number;
  type?: string;
  genre?: Array<string>;
  image?: string;
  name?: string;
  rating?: number;
  age?: number;
  status?: string;
  description?: string;
}
export interface ITypes {
  id: undefined | number;
  type: undefined | string;
}
export interface IGenres {
  id: undefined | number;
  genre: undefined | string;
}
export interface IMangaHeader {
  isLight: boolean;
  userName: string;
  changeTheme: () => void;
}
export interface IGetManga {
  name: string;
  type: string;
  genre: string;
  page: number;
}
export interface ISingleManga {
  id: string | undefined;
}
