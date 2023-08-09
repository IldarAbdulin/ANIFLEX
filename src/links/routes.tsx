import React from 'react';
import { links } from './links';
import { HomePage, MainPage, NotFoundPage, Profile } from '../pages';

type IChildren = {
  path: string;
  element: React.ReactElement;
};

type IPublicRoutes = {
  children: IChildren[];
};

export const publicRoutes: IPublicRoutes[] = [
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
