import { useAppSelector } from './useAppSelector';

export function useAuth() {
  const { email, token, id, isAuthenticated } = useAppSelector(
    ({ user }) => user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
    isAuthenticated,
  };
}
