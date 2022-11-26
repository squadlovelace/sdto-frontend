import { useState } from 'react';
import { User } from '../../types/User';
import { useApi } from '../../hooks/useApi';
import { authContext } from './authContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const signin = async (cpf: string, password: string) => {
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, signin, signout }}>
      {children}
    </authContext.Provider>
  );
};
