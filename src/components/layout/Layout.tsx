import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const { isLight } = useTheme();
  return (
    <div className={isLight === true ? 'layout light' : 'layout'}>
      {children}
    </div>
  );
};
