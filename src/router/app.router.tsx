import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './router-updated/PrivateRoute';
import { PublicRoute } from './router-updated/PublicRoute';
import { ContactPage } from '@/pages/ContactPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute element={<HomePage />} />,
  },
  /* {
    path: '/about',
    element: <PrivateRoute element={<AboutPage />} />,
  },

  {
    path: '/contact',
    element: <PrivateRoute element={<ContactPage />} />,
  }, */

  // TODO: Otra forma en lugar de poner a cada rato el wrapper <PrivateRoute element={} /> sería:

  {
    element: <PrivateRoute />,
    children: [
      //al usar children, tu wrapper PrivateRoute debe usar <Outlet />
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);
