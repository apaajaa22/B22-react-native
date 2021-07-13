const initSearch = {
  data: [],
};

const searchReducer = (state = initSearch, action) => {
  switch (action.type) {
    case 'GET_SEARCH':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default searchReducer;
