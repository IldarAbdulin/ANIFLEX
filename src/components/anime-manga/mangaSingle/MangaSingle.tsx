import React from 'react';
import Cookies from 'js-cookie';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useTheme } from '../../../hooks/useTheme';
import { useParams } from 'react-router-dom';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { getSingleManga } from '../../../redux/slices/mangaSlice';
import { MangaHeader } from '../mangaMain/MangaHeader';
import { MangaInfo } from './MangaInfo';
import { Loader } from '../../../ui/Loader';
import { MangaFooter } from '../mangaMain/MangaFooter';

export const MangaSingle = () => {
  const { manga, loading } = useAppSelector(({ manga }) => manga);
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');
  const [eps, setEps] = React.useState<number[]>([]);
  const totalEps = Number(manga.episodes);
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

  const changeTheme = () => {
    if (isLight === true) localStorage.setItem('Theme', 'Dark');
    else if (isLight === false) localStorage.setItem('Theme', 'Light');
    setIsLight?.(!isLight);
  };

  const getTotalEps = () => {
    const counterOfAllEps: number[] = [];
    for (let i = 1; i <= totalEps; i++) {
      counterOfAllEps.push(i);
    }
    setEps(counterOfAllEps);
  };

  React.useEffect(() => {
    dispatch(getSingleManga({ id }));
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
    defaultTheme();
    getTotalEps();
  }, [id, dispatch, totalEps]);

  return (
    <>
      <Box className="manga-single">
        <MangaHeader
          isLight={isLight}
          changeTheme={changeTheme}
          userName={userName}
        />
        {loading ? (
          <Box
            sx={{
              height: '77vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loader />
          </Box>
        ) : (
          <>
            {' '}
            <MangaInfo manga={manga} isLight={isLight} />
            <Box id="watch" className="manga-single_watch-anime">
              <p>Название: "{manga.name}"</p>
              <FormControl
                sx={{
                  mt: 2,
                  width: 200,
                  color: '#fff',
                }}
              >
                <Select
                  defaultValue={`Выбрать серию`}
                  variant="outlined"
                  sx={{
                    color: isLight ? '#232323' : '#d0d0d0',
                  }}
                >
                  <MenuItem
                    disabled
                    value="Выбрать серию"
                    sx={{ color: '#232323' }}
                  >
                    Выбрать серию
                  </MenuItem>
                  {eps.map((ep) => (
                    <MenuItem key={ep} value={ep}>
                      {ep}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </>
        )}
      </Box>
      <MangaFooter />
    </>
  );
};
