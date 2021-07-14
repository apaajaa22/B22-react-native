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
    case 'SET_UPDATE_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_DELETE_PRODUCTS':
      const data = [...state.products];
      const removed = data.splice(action.payload);
      return {
        ...state,
        data,
      };
    default:
      return {...state};
  }
};

export default carts;
