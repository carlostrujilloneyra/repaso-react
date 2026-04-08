import { UserContext } from '@/context/UserContext';
import { use } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  element: React.ReactNode;
}

export const PublicRoute = ({ element }: Props) => {
  const { isLogged } = use(UserContext);

  if (isLogged) return <Navigate to='/about' replace />;

  return element;
};
