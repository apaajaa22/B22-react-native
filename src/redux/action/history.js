import axios from 'axios';
import {API_URL} from '@env';
import {http} from '../../helpers/http';
import toastMessage from '../../utils/showMessage';

export const getHistory = token => dispatch => {
  dispatch({type: 'SET_LOADING', payload: true});
  axios
    .get(`${API_URL}/private/transactions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch({type: 'SET_HISTORY', payload: res.data.results});
      dispatch({type: 'SET_LOADING', payload: false});
    })
    .catch(err => {
      console.log(err.response.data.message);
      dispatch({type: 'SET_LOADING', payload: false});
    });
};

export const getDetailHistory = (token, id) => {
  return async dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data} = await http(token).get(
        `${API_URL}/private/transactions/${id}`,
      );
      dispatch({
        type: 'SET_GET_DETAILS_HISTORY',
        payload: {results: data.results, invoice: data.invoice},
      });
      dispatch({type: 'SET_LOADING', payload: false});
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
};

// export const getHistorySec =  token => async dispatch => {
//   const {data} = await http(token).get(`${API_URL}/private/transactions`);
// };
