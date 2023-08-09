import React from 'react';
import Cookies from 'js-cookie';
import { Layout } from '../..';
import { useTheme } from '../../../hooks/useTheme';
import { MangaHeader } from './MangaHeader';

export const Manga: React.FC = () => {
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');

  const changeTheme = () => {
    setIsLight?.(!isLight);
  };

  React.useEffect(() => {
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token) {
      setUserName(`${username}`);
    }
  }, []);

  return (
    <Layout>
      <div className="manga">
        <MangaHeader
          isLight={isLight}
          changeTheme={changeTheme}
          userName={userName}
        />
      </div>
    </Layout>
  );
};
