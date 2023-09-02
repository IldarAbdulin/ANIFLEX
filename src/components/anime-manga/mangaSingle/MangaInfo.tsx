import { Box } from '@mui/material';
import { IManga } from '../../../interfaces/interface';
import { Link } from 'react-router-dom';

type TInfo = {
  manga: IManga;
  isLight: boolean;
};

export const MangaInfo = ({ manga, isLight }: TInfo) => {
  return (
    <>
      <Box sx={{ mt: 5, display: 'flex', gap: '50px' }}>
        <Box>
          <img className="image" src={manga.image} alt={manga.name} />
        </Box>
        <Box className="manga-single_p" sx={{ margin: '30px 0' }}>
          <a
            href="#watch"
            className={isLight ? 'manga-single_a-light' : 'manga-single_a-dark'}
          >
            Смотреть сейчас{' '}
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 26.0607C11.5251 26.6464 12.4749 26.6464 13.0607 26.0607L22.6066 16.5147C23.1924 15.9289 23.1924 14.9792 22.6066 14.3934C22.0208 13.8076 21.0711 13.8076 20.4853 14.3934L12 22.8787L3.51472 14.3934C2.92893 13.8076 1.97918 13.8076 1.3934 14.3934C0.807611 14.9792 0.807611 15.9289 1.3934 16.5147L10.9393 26.0607ZM10.5 -6.55671e-08L10.5 25L13.5 25L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                fill={isLight ? '#232323' : '#fff'}
              />
            </svg>
          </a>
          <Box sx={{ mt: 2 }}>
            <p style={{ fontSize: '28px', fontWeight: 400 }}>{manga.name}</p>
            <p>Тип: {manga.type}</p>
            <p>Эпизоды: {manga.episodes}</p>
            <p>Статус: {manga.status}</p>
            <p>
              Жанр:
              {manga.genre?.map((g) => (
                <> {g}, </>
              ))}
            </p>
            <p>Рейтинг: {manga.rating} / 10</p>
            <p>Возрастные ограничения: {manga.age}+</p>
          </Box>
        </Box>
      </Box>
      <h4>{manga.description}</h4>
      <Box
        className="manga-single_other-links"
        sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: '25px' }}
      >
        <Link
          to={`/main/${manga.id}`}
          className={
            isLight ? 'manga-single_other-light' : 'manga-single_other-dark'
          }
        >
          Читать мангу
        </Link>
        <Link
          to={`/main/${manga.id}`}
          className={
            isLight ? 'manga-single_other-s-light' : 'manga-single_other-s-dark'
          }
        >
          Персонажи
        </Link>
      </Box>
      <Box className="manga-single_frames">
        <p>Кадры</p>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {manga.frames?.map((frame, index) => (
            <>
              <img
                key={index}
                src={frame}
                alt={frame}
                width={550}
                height={300}
              />
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};
