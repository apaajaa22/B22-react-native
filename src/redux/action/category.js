import {API_URL} from '@env';
import {http} from '../../helpers/http';
import toastMessage from '../../utils/showMessage';

export const getCategory = () => {
  return async dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data} = await http().get(`${API_URL}/categories`);
      dispatch({
        type: 'SET_GET_CATEGORY',
        payload: {category: data.results, pageInfo: data.pageInfo},
      });
      dispatch({type: 'SET_LOADING', payload: false});
    } catch (error) {
      toastMessage(error?.response?.data?.message);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};
