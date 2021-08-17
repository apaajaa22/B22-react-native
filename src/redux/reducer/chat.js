const initialState = {
  user: [],
  chat: [],
  allUser: [],
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_CHAT':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_DETAIL_CHAT':
      return {
        ...state,
        chat: action.payload,
      };
    case 'GET_ALL_USER':
      return {
        ...state,
        allUser: action.payload,
      };
    case 'CLEAR_CHAT':
      return {
        ...state,
        chat: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default chat;
