import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/home/Button';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="notfoundpage">
      <div>
        <div>
          <Button
            onClick={goBack}
            title="Назад"
            className="btn"
            showReverseArrow={true}
          />
        </div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
};
