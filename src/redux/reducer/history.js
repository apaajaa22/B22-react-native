const historyinit = {
  history: [],
};

export const historyReducer = (state = historyinit, action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    case 'SET_CLEAR_HISTORY':
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};
