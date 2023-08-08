import React from 'react';
import Cookies from 'js-cookie';
import { Layout } from '../../components';
import { useTheme } from '../../hooks/useTheme';

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
        <h1>Welocome</h1>
        <p>{userName}</p>
        <button onClick={changeTheme}>Сменить тему</button>
      </div>
    </Layout>
  );
};