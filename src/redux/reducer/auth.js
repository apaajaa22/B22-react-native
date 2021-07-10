const initStateRegister = {
  isRegister: false,
};

export const registerReducer = (state = initStateRegister, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        isRegister: !state.isRegister,
      };
    default:
      return state;
  }
};
