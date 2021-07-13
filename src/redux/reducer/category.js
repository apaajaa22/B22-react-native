const initialState = {
  data: [],
  productCategory: [],
  pageInfo: {},
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_CATEGORY':
      return {
        ...state,
        data: action.payload.category,
      };
    default:
      return {...state};
  }
};

export default category;
