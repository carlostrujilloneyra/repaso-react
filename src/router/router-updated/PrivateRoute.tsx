import { UserContext } from '@/context/UserContext';
import { use } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/* interface Props {
  element: React.ReactNode;
} */

export const PrivateRoute = () => {
  const { isLogged } = use(UserContext);

  if (isLogged) return <Outlet />; //sino usará children va normal el "element"

  return <Navigate to='/' replace />;
};
