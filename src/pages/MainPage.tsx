import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { Manga } from '../components/anime-manga/manga/Manga';

export const MainPage: React.FC = () => {
  return (
    <>
      {Cookies.get('token') && Cookies.get('user') ? (
        <>
          <Navigate to={`/main`} /> <Manga />
        </>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};
