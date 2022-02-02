import { createContext, useReducer } from 'react';

import { authReducer, authReducerActions } from '../reducers/auth';

const AuthContext = createContext({
  loggedUser: {
    id: 0,
    name: '',
    picture: '',
    status: '',
  },
  setLoggedUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, dispatchLoggedUser] = useReducer(authReducer, {
    id: 1,
    name: 'Nathália Pissuti',
    picture: 'https://github.com/nathipg.png',
    status: 'My dog ate all my comics :(',
  }); // It's fixed because there is no real login

  const changeLoggedUserHandler = user => {
    dispatchLoggedUser({
      type: authReducerActions.CHANGE,
      user,
    });
  };

  return (
    <AuthContext.Provider value={{ loggedUser, changeLoggedUserHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
