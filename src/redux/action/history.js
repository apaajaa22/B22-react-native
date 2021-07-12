import axios from 'axios';
import {API_URL} from '@env';
import {http} from '../../helpers/http';

export const getHistory = token => dispatch => {
  axios
    .get(`${API_URL}/private/transactions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch({type: 'SET_HISTORY', payload: res.data.results});
    })
    .catch(err => {
      console.log(err.response.data.message);
    });
};

// export const getHistorySec =  token => async dispatch => {
//   const {data} = await http(token).get(`${API_URL}/private/transactions`);
// };
