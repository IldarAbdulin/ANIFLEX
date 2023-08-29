import React from 'react';
import { TMangaMenu } from '../../../types/types';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { removeUser } from '../../../redux/slices/userSlice';

export const MangaMenu = ({ setActive }: TMangaMenu) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLight } = useTheme();
  const closeModal = () => setActive(false);
  const logout = () => {
    if (confirm('Вы уверены что хотите выйти из аккаунта ?')) {
      dispatch(removeUser());
      navigate('/');
    }
  };
  return (
    <Box className="burger-menu" onClick={closeModal}>
      <Box
        className="burger-menu_content"
        onClick={(e) => e.stopPropagation()}
        sx={{
          background: isLight ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        }}
      >
        <Box className="burger-menu_links">
          <Box>
            <svg
              style={{ cursor: 'pointer' }}
              onClick={closeModal}
              width="15"
              height="15"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="21.2131"
                y1="2.12132"
                x2="2.12125"
                y2="21.2132"
                stroke={isLight ? '#232323' : '#e0e0e0'}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="1.5"
                y1="-1.5"
                x2="28.5"
                y2="-1.5"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.21313 0)"
                stroke={isLight ? '#232323' : '#e0e0e0'}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </Box>
          <Box>
            <Link
              to={`/profile`}
              style={{ color: isLight ? '#232323' : '#e0e0e0' }}
            >
              Профиль
            </Link>
          </Box>
          <Box>
            <button
              onClick={logout}
              style={{ color: isLight ? '#232323' : '#e0e0e0' }}
            >
              Выйти
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
