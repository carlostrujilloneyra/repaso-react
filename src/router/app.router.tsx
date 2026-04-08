import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './router-updated/PrivateRoute';
import { PublicRoute } from './router-updated/PublicRoute';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute element={<HomePage />} />,
  },
  {
    path: '/about',
    element: <PrivateRoute element={<AboutPage />} />,
  },
]);
