import axios from 'axios';
import {API_URL} from '@env';
// import {http} from '../../helpers/http';

export const getFoodById = id => dispatch => {
  // http().get('http://192.168.1.9:8080/products')
  axios.get(`${API_URL}/categories/${id}/products`).then(res => {
    if (id === 1) {
      dispatch({type: 'SET_FAVORITE', value: res.data.results});
    }
    if (id === 2) {
      dispatch({type: 'SET_COFFEE', value: res.data.results});
    }
    if (id === 3) {
      dispatch({type: 'SET_NONCOFFEE', value: res.data.results});
    }
    if (id === 4) {
      dispatch({type: 'SET_FOODS', value: res.data.results});
    }
  });
};

export const getFoodDetail = id => dispatch => {
  axios.get(`${API_URL}/products/${id}`).then(res => {
    dispatch({type: 'SET_DETAILS', value: res.data.results});
  });
};
