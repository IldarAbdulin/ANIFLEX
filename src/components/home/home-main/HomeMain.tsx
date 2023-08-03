import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../../assets/home/logo.png';
import { Button } from '../../../ui/home/Button';

AOS.init();

const HomeMain: React.FC = () => {
  return (
    <div className="home-main">
      <div className="home-main__zerno">
        <div className="home-main__shadow">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="home-main__content"
          >
            <div className="home-main__content-header">
              <div className="home-main__content-header_logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="home-main__content-header_btns">
                <button>Вход</button>
                <button>Регисрация</button>
              </div>
            </div>
            <div className="home-main__content-text_content">
              <h1>
                Аниме, манга , манхва и многое другое совершенно{' '}
                <span>бесплатно</span>
              </h1>
              <p>
                Открой ворота в захватывающий мир аниме и соверши прыжок в
                неизведанные истории! Нажми на кнопку и отправляйся в атмосферу
                удивительных приключений!
              </p>
              <Button
                className="home-main__content-text_content-btn"
                title="Перейти на страницу с аниме"
                showArrow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
