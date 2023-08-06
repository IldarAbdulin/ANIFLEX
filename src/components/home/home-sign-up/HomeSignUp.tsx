import React from 'react';
import { Form } from '../form/Form';
import { SignUpForm } from './SignUpForm';

type TypesHomeSignUp = {
  setActive: (active: boolean) => void;
  onSignInFormActive: () => void;
};

export const HomeSignUp = ({
  setActive,
  onSignInFormActive,
}: TypesHomeSignUp) => {
  const closeModal = () => setActive(false);
  return (
    <div className="registration-modal" onClick={closeModal}>
      <div
        className="registration-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="registration-content__close-svg" onClick={closeModal}>
          <svg
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
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="28.5"
              y2="-1.5"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.21313 0)"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="registration-content__typographys">
          <p onClick={onSignInFormActive}>Вход</p>
          <p>Регистрация</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};
