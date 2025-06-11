import { LoginPage } from '../features/auth/pages/LoginPage';
import { RegisterPage } from '../features/auth/pages/RegisterPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';

type PrivateRoute = {
  path: string;
  element: React.ReactNode;
};

type PublicRoute = PrivateRoute;

export const publicRoutes: PublicRoute[] = [
  {
    path: '/',
    element: <LoginPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <RegisterPage />,
  },
];

export const privateRoutes: PrivateRoute[] = [
  {
    path: '/home',
    element: <HomePage />,
  },

  {
    path: '/about',
    element: <AboutPage />,
  },

  {
    path: '/contact',
    element: <ContactPage />,
  },
];
