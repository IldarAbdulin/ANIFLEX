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

export const Manga: React.FC = () => {
  const location = useLocation();
  const { mangas, error, loading } = useAppSelector(({ manga }) => manga);
  const dispatch = useAppDispatch();
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [type, setType] = React.useState<string>('');
  const [genre, setGenre] = React.useState<string>('');
  const [page, setPage] = React.useState(
    parseInt(`${location.search?.split('=')[1] || 1}`)
  );

  const changeTheme = () => {
    setIsLight?.(!isLight);
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
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
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
                      <img
                        width={280}
                        height={350}
                        key={manga.id}
                        src={manga.image}
                      />
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
      <Box sx={{ padding: '10px 0', height: '25vh' }}>
        <hr />
        <Box className="manga__footer">
          <Box>
            <img src={isLight ? DarkLogo : Logo} alt="logo" />
          </Box>
          <Box>
            <a href="">Связаться с нами</a>
            <a href="">Соглашение</a>
            <a href="">Конфиденциальность</a>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
