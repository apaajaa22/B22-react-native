const initialState = {
  products: [],
};

const carts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART_ADD_ITEM':
      return {
        ...state,
        products: [...state.products, ...[action.payload]],
      };
    case 'SET_CLEAR_PRODUCTS':
      return {
        ...state,
        products: [],
      };
    default:
      return {...state};
  }
};

export default carts;
