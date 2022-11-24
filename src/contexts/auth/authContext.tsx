import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
  user: User | null;
  signin: (cpf: string, password: string) => Promise<boolean>;
  signout: () => void; 
}

export const authContext = createContext<AuthContextType>(null!);