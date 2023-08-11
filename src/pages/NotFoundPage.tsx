import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/home/Button';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Box className="notfoundpage">
      <Box>
        <Box>
          <Button
            onClick={goBack}
            title="Назад"
            className="btn"
            showReverseArrow={true}
          />
        </Box>
        <h1>404</h1>
        <p>Page not found</p>
      </Box>
    </Box>
  );
};
