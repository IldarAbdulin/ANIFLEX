import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../../assets/home/logo.png';
import { Button } from '../../../ui/home/Button';
import { HomeLogin } from '../home-login/HomeLogin';
import { HomeSignUp } from '../home-sign-up/HomeSignUp';

AOS.init();

const HomeMain: React.FC = () => {
  const [isLoginActive, setIsLoginActive] = React.useState<boolean>(false);
  const [isSignUpActive, setIsSignUpActive] = React.useState<boolean>(false);
  return (
    <>
      <div className="home-main">
        <div className="home-main__zerno">
          <div className="home-main__shadow">
            <div className="home-main__content">
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                className="home-main__content-header"
              >
                <div className="home-main__content-header_logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="home-main__content-header_btns">
                  <button onClick={() => setIsLoginActive(true)}>Вход</button>
                  <button onClick={() => setIsSignUpActive(true)}>
                    Регисрация
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="home-main__content-text_content"
              >
                <h1>
                  Аниме, манга , манхва и многое другое совершенно{' '}
                  <span>бесплатно</span>
                </h1>
                <p>
                  Открой ворота в захватывающий мир аниме и соверши прыжок в
                  неизведанные истории! Нажми на кнопку и отправляйся в
                  атмосферу удивительных приключений!
                </p>
                <Button
                  className="home-main__content-text_content-btn"
                  title="Перейти на страницу с аниме"
                  showArrow={true}
                />
              </div>
              {isLoginActive && (
                <HomeLogin
                  setActive={setIsLoginActive}
                  onRegistrationFormActive={() => {
                    setIsLoginActive(false);
                    setIsSignUpActive(true);
                  }}
                />
              )}
              {isSignUpActive && (
                <HomeSignUp
                  setActive={setIsSignUpActive}
                  onSignInFormActive={() => {
                    setIsLoginActive(true);
                    setIsSignUpActive(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
