import axios from 'axios';
import {http} from '../../helpers/http';
import toastMessage from '../../utils/showMessage';
import {storeData} from '../../utils/storage';

export const signInAction = (data, navigation) => dispatch => {
  const form = new URLSearchParams();
  form.append('email', data.email);
  form.append('password', data.password);
  dispatch({type: 'SET_LOADING', payload: true});
  axios
    .post('http://192.168.1.9:8080/auth/login', form)
    .then(res => {
      dispatch({type: 'SET_LOADING', payload: false});
      const token = res.data.results.token;
      storeData('token', token);
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
    .post('http://192.168.1.9:8080/auth/register', form)
    .then(res => {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(res?.data?.message, 'success');
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(err?.response?.data?.message);
    });
};
