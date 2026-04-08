import { useState } from 'react';
import { UserContext } from './UserContext';

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <UserContext
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext>
  );
};
