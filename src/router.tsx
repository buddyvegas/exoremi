import { RouteObject } from 'react-router-dom';
import { Layout } from './pages/Layout';
import MonFrigo from './pages/mon-frigo/MonFrigo';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <MonFrigo />,
      },
    ],
  },
];
