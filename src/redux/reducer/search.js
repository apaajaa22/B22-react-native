const initSearch = {
  data: [],
  pageInfo: {},
};

const searchReducer = (state = initSearch, action) => {
  switch (action.type) {
    case 'GET_SEARCH':
      return {
        ...state,
        data: action.payload.data,
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_NEXT_PRODUCTS':
      return {
        ...state,
        data: [...state.data, ...action.payload.products],
        pageInfo: action.payload.pageInfo,
      };
    default:
      return {
        ...state,
      };
  }
};
export default searchReducer;
