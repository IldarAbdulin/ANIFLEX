import React from 'react';

type TypesHomeLogin = {
  setActive: (active: boolean) => void;
  onRegistrationFormActive: () => void;
};

export const HomeLogin = ({
  setActive,
  onRegistrationFormActive,
}: TypesHomeLogin) => {
  const closeModal = () => setActive(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="sign-in-modal" onClick={closeModal}>
      <div className="sign-in-content" onClick={(e) => e.stopPropagation()}>
        <div className="sign-in-content__close-svg" onClick={closeModal}>
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
        <div className="sign-in-content__typography">
          <p>Вход</p>
          <p onClick={onRegistrationFormActive}>Регистрация</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="sign-in-content__form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="sign-in-content__form-checkbox">
              <label className="sign-in-content__form-checkbox_content">
                <input type="checkbox" />
                <svg viewBox="0 0 80 80" height="20px" width="20px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    className="path"
                  ></path>
                </svg>
              </label>
              <div>
                <span>Запомнить меня</span>
              </div>
            </div>
            <button className="sign-in-content__form-button">Вход</button>
          </form>
          <div className="sign-in-content__form-google">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5113 5.86375C21.2788 3.78312 18.2925 2.5 15 2.5C8.09687 2.5 2.5 8.09687 2.5 15C2.5 21.9031 8.09687 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4138 13.3438 27.2569 12.5519Z"
                fill="#FFC107"
              />
              <path
                d="M3.94128 9.18187L8.04816 12.1938C9.15941 9.4425 11.8507 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9757 9.39937L23.5113 5.86375C21.2788 3.78312 18.2925 2.5 15 2.5C10.1988 2.5 6.03503 5.21062 3.94128 9.18187Z"
                fill="#FF3D00"
              />
              <path
                d="M15 27.5C18.2287 27.5 21.1625 26.2644 23.3806 24.255L19.5118 20.9812C18.2147 21.9677 16.6296 22.5013 15 22.5C11.7487 22.5 8.98808 20.4269 7.94808 17.5338L3.87183 20.6744C5.94058 24.7225 10.1418 27.5 15 27.5Z"
                fill="#4CAF50"
              />
              <path
                d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4138 13.3438 27.2569 12.5519Z"
                fill="#1976D2"
              />
            </svg>
            <div>
              <span>Войти через Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
