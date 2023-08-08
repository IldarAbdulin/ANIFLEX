import React from 'react';

interface IContext {
  isLight: boolean;
  setIsLight?: (arg: boolean) => void;
}

export const ThemeContext = React.createContext<IContext>({
  isLight: false,
  setIsLight: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [isLight, setIsLight] = React.useState<boolean>(false);
  const value = React.useMemo(() => ({ isLight, setIsLight }), [isLight]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
