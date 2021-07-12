const initHome = {
  favorite: [],
  coffee: [],
  nonCoffee: [],
  foods: [],
  detailProduct: [],
};

export const homeReducer = (state = initHome, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favorite: action.value,
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
    default:
      return {
        ...state,
      };
  }
};
