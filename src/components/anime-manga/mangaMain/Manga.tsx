import React from 'react';
import Cookies from 'js-cookie';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { getManga } from '../../../redux/slices/mangaSlice';
import {
  Box,
  Pagination,
  Stack,
  ThemeProvider,
  createTheme,
  PaginationItem,
} from '@mui/material';
import { Layout } from '../..';
import { useTheme } from '../../../hooks/useTheme';
import { MangaHeader } from './MangaHeader';
import { MangaFilter } from './MangaFilter';
import Logo from '../../../assets/home/logo.png';
import DarkLogo from '../../../assets/home/dark-logo.png';
import { Loader } from '../../../ui/Loader';
import { MangaFooter } from './MangaFooter';

export const Manga: React.FC = () => {
  const location = useLocation();
  const { isLight, setIsLight } = useTheme();
  const { mangas, error, loading } = useAppSelector(({ manga }) => manga);
  const dispatch = useAppDispatch();
  const [userName, setUserName] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [type, setType] = React.useState<string>('');
  const [genre, setGenre] = React.useState<string>('');
  const [page, setPage] = React.useState(
    parseInt(`${location.search?.split('=')[1] || 1}`)
  );

  const changeTheme = () => {
    if (isLight === true) localStorage.setItem('Theme', 'Dark');
    else if (isLight === false) localStorage.setItem('Theme', 'Light');
    setIsLight?.(!isLight);
  };

  const defaultTheme = () => {
    const value = localStorage.getItem('Theme');
    if (value === 'Dark') {
      setIsLight?.(false);
    } else if (value === 'Light') {
      setIsLight?.(true);
    }
  };

  const theme = createTheme({
    palette: {
      success: {
        main: isLight ? '#fff' : '#fff',
        contrastText: isLight ? '#232323' : '#232323',
      },
    },
  });

  const resetGenres = () => {
    setGenre('');
  };
  const resetTypes = () => {
    setType('');
  };

  React.useEffect(() => {
    dispatch(getManga({ name, type, genre, page }));
    if (name !== '') {
      setPage(1);
    }
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
    defaultTheme();
  }, [name, type, genre, page]);

  return (
    <Layout>
      <Box className="manga">
        <MangaHeader
          isLight={isLight}
          changeTheme={changeTheme}
          userName={userName}
        />
        <MangaFilter
          name={name}
          setName={setName}
          type={type}
          setType={setType}
          genre={genre}
          setGenre={setGenre}
          resetGenres={resetGenres}
          resetTypes={resetTypes}
        />
        <Box>
          {error ? (
            <p className="manga__all-err">{error}</p>
          ) : (
            <>
              {loading ? (
                <Box className="manga__all-loader">
                  <Loader />
                </Box>
              ) : mangas.length === 0 ? (
                <Box className="manga__all-loader">
                  <p className="manga__all-err">
                    По вашему запросу ничего не найдено : (
                  </p>
                </Box>
              ) : (
                <>
                  <Box className="manga__all-manga">
                    {mangas.map((manga) => (
                      <Link to={`/main/${manga.id}`} key={manga.id}>
                        <img
                          style={{ cursor: 'pointer' }}
                          width={280}
                          height={350}
                          src={manga.image}
                        />
                      </Link>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ThemeProvider theme={theme}>
                      <Stack
                        spacing={2}
                        sx={{ color: '#fff', padding: '20px 0 0 0' }}
                      >
                        <Pagination
                          color="success"
                          count={3}
                          page={page}
                          onChange={(_, num) => setPage(num)}
                          showFirstButton
                          showLastButton
                          renderItem={(item: any) => (
                            <PaginationItem
                              sx={{
                                color: '#A5A5A5',
                                fontSize: '19px',
                                fontWeight: '300',
                              }}
                              component={Link}
                              to={`/main?_page=${item.page}`}
                              {...item}
                            />
                          )}
                        />
                      </Stack>
                    </ThemeProvider>
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
      <MangaFooter />
    </Layout>
  );
};
