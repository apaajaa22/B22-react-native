import axios from 'axios';
// import {http} from '../../helpers/http';

export const getFoodById = id => dispatch => {
  // http().get('http://192.168.1.9:8080/products')
  axios.get(`http://192.168.1.9:8080/categories/${id}/products`).then(res => {
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
