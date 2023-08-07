import React from 'react';
import Cookies from 'js-cookie';

export const Manga: React.FC = () => {
  const [userName, setUserName] = React.useState<string>('');

  React.useEffect(() => {
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token) {
      setUserName(username ? username : '');
    }
  }, []);

  return (
    <>
      <div className="manga">
        <h1>Welocome</h1>
        <p>{userName}</p>
      </div>
    </>
  );
};
