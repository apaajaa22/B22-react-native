import {API_URL} from '@env';
import {http} from '../../helpers/http';
import toastMessage from '../../utils/showMessage';

export const getItemBySearch = (search = '', sort = 'name') => {
  return async dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data} = await http().get(
        `${API_URL}/products?search=${search}&sort=${sort}`,
      );
      if (data.results.length === 0) {
        toastMessage('item not found');
      }
      dispatch({
        type: 'GET_SEARCH',
        payload: {data: data.results, pageInfo: data.pageInfo},
      });
      dispatch({type: 'SET_LOADING', payload: false});
    } catch (error) {
      toastMessage('item not found');
    }
  };
};

export const getProducts = url => {
  return async dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data} = await http().get(url);
      dispatch({
        type: 'SET_NEXT_PRODUCTS',
        payload: {products: data.results, pageInfo: data.pageInfo},
      });
      dispatch({type: 'SET_LOADING', payload: false});
    } catch (err) {
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};
