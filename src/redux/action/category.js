import {API_URL} from '@env';
import {http} from '../../helpers/http';

export const getCategory = () => {
  return async dispatch => {
    const {data} = await http().get(`${API_URL}/categories`);
    dispatch({
      type: 'SET_GET_CATEGORY',
      payload: {category: data.results, pageInfo: data.pageInfo},
    });
  };
};
