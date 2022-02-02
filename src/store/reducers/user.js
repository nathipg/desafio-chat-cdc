const loadHandler = (prevState, action) => {
  return [...action.users];
};

export const userReducer = (prevState, action) => {
  switch (action.type) {
    case userReducerActions.LOAD:
      return loadHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const userReducerActions = {
  LOAD: 'LOAD',
};
