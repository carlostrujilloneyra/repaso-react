import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem('isLogged') ?? false;

  return isLogged ? <Outlet /> : <Navigate to='/login' />;
};
