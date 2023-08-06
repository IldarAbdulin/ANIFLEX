import React from 'react';
import { links } from './links';
import { HomePage, MainPage } from '../pages';

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
    ],
  },
];
