import {API_URL} from '@env';
import {http} from '../../helpers/http';
import toastMessage from '../../utils/showMessage';

export const getItemBySearch = (search = '', sort = 'name') => {
  return async dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data} = await http().get(
        `${API_URL}/products?search=${search}&limit=100&sort=${sort}`,
      );
      if (data.results.length === 0) {
        toastMessage('item not found');
      }
      dispatch({
        type: 'GET_SEARCH',
        payload: data.results,
      });
      dispatch({type: 'SET_LOADING', payload: false});
    } catch (error) {
      toastMessage('item not found');
    }
  };
};
