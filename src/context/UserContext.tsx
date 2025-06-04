import { createContext } from 'react';

interface UserContextProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as UserContextProps);
