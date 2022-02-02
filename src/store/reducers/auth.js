const changeHandler = (prevState, action) => {
  return action.user;
};

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case authReducerActions.CHANGE:
      return changeHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const authReducerActions = {
  CHANGE: 'CHANGE',
};
