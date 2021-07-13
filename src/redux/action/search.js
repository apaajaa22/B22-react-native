import {API_URL} from '@env';
import {http} from '../../helpers/http';

export const getItemBySearch = (search = '') => {
  return async dispatch => {
    const {data} = await http().get(`${API_URL}/products?search=${search}`);
    dispatch({
      type: 'GET_SEARCH',
      payload: data.results,
    });
  };
};
