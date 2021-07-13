const initHome = {
  favorite: [],
  coffee: [],
  nonCoffee: [],
  foods: [],
  detailProduct: [],
  pageInfo: {},
};

export const homeReducer = (state = initHome, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favorite: action.value,
        pageInfo: action.value,
      };
    case 'SET_COFFEE':
      return {
        ...state,
        coffee: action.value,
      };
    case 'SET_NONCOFFEE':
      return {
        ...state,
        nonCoffee: action.value,
      };
    case 'SET_FOODS':
      return {
        ...state,
        foods: action.value,
      };
    case 'SET_DETAILS':
      return {
        ...state,
        detailProduct: action.value,
      };
    case 'SET_PAGE_INFO':
      return {
        ...state,
        pageInfo: action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
