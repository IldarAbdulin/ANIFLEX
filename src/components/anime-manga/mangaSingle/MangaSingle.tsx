import React from 'react';
import Cookies from 'js-cookie';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useTheme } from '../../../hooks/useTheme';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getSingleManga } from '../../../redux/slices/mangaSlice';
import { MangaHeader } from '../mangaMain/MangaHeader';

export const MangaSingle = () => {
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');
  const { manga } = useAppSelector(({ manga }) => manga);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const defaultTheme = () => {
    const value = localStorage.getItem('Theme');
    if (value === 'Dark') {
      setIsLight?.(false);
    } else if (value === 'Light') {
      setIsLight?.(true);
    }
  };
  React.useEffect(() => {
    dispatch(getSingleManga({ id }));
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
    defaultTheme();
  }, []);
  const changeTheme = () => {
    if (isLight === true) localStorage.setItem('Theme', 'Dark');
    else if (isLight === false) localStorage.setItem('Theme', 'Light');
    setIsLight?.(!isLight);
  };

  return (
    <Box className="manga-single">
      <MangaHeader
        isLight={isLight}
        changeTheme={changeTheme}
        userName={userName}
      />
      <Box>
        <Box>
          <img className="image" src={manga.image} alt={manga.name} />
        </Box>
        <Box></Box>
      </Box>
      {manga.description}
    </Box>
  );
};
