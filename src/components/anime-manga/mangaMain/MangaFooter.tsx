import React from 'react';
import { Box } from '@mui/material';
import DarkLogo from '../../../assets/home/dark-logo.png';
import Logo from '../../../assets/home/logo.png';
import { useTheme } from '../../../hooks/useTheme';

export const MangaFooter = () => {
  const { isLight } = useTheme();
  return (
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
  );
};
