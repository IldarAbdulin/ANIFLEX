import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import React from 'react';

type Props = {};

export const MainPage: React.FC = (props: Props) => {
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welocome</h1>
      <p>{email}</p>
    </div>
  ) : (
    <Navigate to={`/`} />
  );
};
