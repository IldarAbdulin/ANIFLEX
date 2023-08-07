import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../../assets/home/logo.png';
import { Button } from '../../../ui/home/Button';
import { HomeLogin } from '../home-login/HomeLogin';
import { HomeSignUp } from '../home-sign-up/HomeSignUp';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { removeUser } from '../../../redux/slices/userSlice';

AOS.init();

const HomeMain: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoginActive, setIsLoginActive] = React.useState<boolean>(false);
  const [isSignUpActive, setIsSignUpActive] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>('');

  const logout = () => {
    dispatch(removeUser());
  };

  const isAuthUser = () => {
    if (!isLogin) {
      alert('Вы должны быть авторизированы!');
    }
  };

  React.useEffect(() => {
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token) {
      setIsLogin(true);
      setUserName(`${username}`);
    }
  }, [dispatch, logout]);
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
                {isLogin ? (
                  <>
                    <div className="home-main__content-header_p">
                      <p>{userName}</p>
                      <Button onClick={logout} title="Выйти" />
                    </div>
                  </>
                ) : (
                  <div className="home-main__content-header_btns">
                    <button onClick={() => setIsLoginActive(true)}>Вход</button>
                    <button onClick={() => setIsSignUpActive(true)}>
                      Регисрация
                    </button>
                  </div>
                )}
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
                <Link
                  style={{ textDecoration: 'none' }}
                  to={isLogin ? '/main' : ''}
                >
                  <Button
                    onClick={isAuthUser}
                    className="home-main__content-text_content-btn"
                    title="Перейти на страницу с аниме"
                    showArrow={true}
                  />
                </Link>
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
