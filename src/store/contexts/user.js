import { createContext, useCallback, useReducer } from 'react';

import { userReducer, userReducerActions } from '../reducers/user';

import * as userService from '../../services/User';

const UserContext = createContext({
  users: [],
});

export const UserContextProvider = ({ children }) => {
  const [users, dispatchUsers] = useReducer(userReducer, []);

  const loadUsers = useCallback(async () => {
    const users = await userService.load();

    dispatchUsers({
      type: userReducerActions.LOAD,
      users,
    });
  }, [dispatchUsers]);

  return (
    <UserContext.Provider value={{ users, loadUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
