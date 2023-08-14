import { links } from './links';
import { TPublicRoutes } from '../types/types';
import { HomePage, MainPage, NotFoundPage, Profile } from '../pages';

export const publicRoutes: TPublicRoutes[] = [
  {
    children: [
      {
        path: links.home,
        element: <HomePage />,
      },
      {
        path: links.main,
        element: <MainPage />,
      },
      {
        path: links.notFound,
        element: <NotFoundPage />,
      },
      {
        path: links.profile,
        element: <Profile />,
      },
    ],
  },
];
