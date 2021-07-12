import axios from 'axios';
import toastMessage from '../../utils/showMessage';
import {storeData} from '../../utils/storage';
import {API_URL} from '@env';

export const signInAction = (data, navigation) => dispatch => {
  const form = new URLSearchParams();
  form.append('email', data.email);
  form.append('password', data.password);
  dispatch({type: 'SET_LOADING', payload: true});
  axios
    .post(`${API_URL}/auth/login`, form)
    .then(res => {
      dispatch({type: 'SET_LOADING', payload: false});
      const token = res.data.results.token;
      storeData('token', token);
      axios
        .get(`${API_URL}/private/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(newData => {
          storeData('profile', newData.data.results);
        });
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(err?.response?.data?.message);
    });
};

export const signUpAction = data => dispatch => {
  console.log(data);
  const form = new URLSearchParams();
  form.append('email', data.email);
  form.append('password', data.password);
  form.append('phone_number', data.phone);
  dispatch({type: 'SET_LOADING', payload: true});
  axios
    .post(`${API_URL}/auth/register`, form)
    .then(res => {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(res?.data?.message, 'success');
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(err?.response?.data?.message);
    });
};
