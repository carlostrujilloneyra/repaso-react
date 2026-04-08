import { UserContext } from '@/context/UserContext';
import { use } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  element: React.ReactNode;
}

export const PrivateRoute = ({ element }: Props) => {
  const { isLogged } = use(UserContext);

  if (isLogged) return element;

  return <Navigate to='/' replace />;
};
