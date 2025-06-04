import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem('isLogged') ?? false;

  return isLogged ? <Navigate to='/about' /> : <Outlet />;
};
