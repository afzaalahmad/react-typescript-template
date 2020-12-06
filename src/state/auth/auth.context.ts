import { AuthContextInterface } from './auth.types';
import { createContext } from 'react';

const AuthContext = createContext<AuthContextInterface>({
  me: undefined,
  setMe: () => undefined,
});

export default AuthContext;
