import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { Manga } from '../components/anime-manga/Manga';

export const MainPage: React.FC = () => {
  return (
    <>
      {Cookies.get('token') && Cookies.get('user') ? (
        <Manga />
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};
