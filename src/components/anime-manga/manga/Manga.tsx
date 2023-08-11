import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

interface IManga {
  id: number;
  type: string;
  genre: Array<string>;
  image: string;
  name: string;
}

export const Manga: React.FC = () => {
  const [manga, setManga] = React.useState<IManga[]>([]);
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');

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

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/manga?_limit=8')
      .then(({ data }) => setManga(data));
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token) {
      setUserName(`${username}`);
    }
  }, []);

  return (
    <Layout>
      <Box className="manga">
        <MangaHeader
          isLight={isLight}
          changeTheme={changeTheme}
          userName={userName}
        />
        <MangaFilter />
        <Box className="manga__all-manga">
          {manga.map((m) => (
            <>
              <img width={280} height={350} key={m.id} src={m.image} />
            </>
          ))}
          <ThemeProvider theme={theme}>
            <Stack spacing={2} sx={{ color: '#fff', padding: '20px 0 0 0' }}>
              <Pagination
                color="success"
                count={5}
                renderItem={(item: Object) => (
                  <PaginationItem
                    sx={{
                      color: '#A5A5A5',
                      fontSize: '19px',
                      fontWeight: '300',
                    }}
                    component={Link}
                    to={`/main`}
                    {...item}
                  />
                )}
              />
            </Stack>
          </ThemeProvider>
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
