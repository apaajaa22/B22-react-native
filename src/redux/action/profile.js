import axios from 'axios';
import toastMessage from '../../utils/showMessage';
import {API_URL} from '@env';

export const getProfile = token => dispatch => {
  axios
    .get(`${API_URL}/private/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch({type: 'SET_PROFILE', payload: res.data.results});
    });
};

export const editProfile = (token, data, photo, navigation) => dispatch => {
  const form = new FormData();
  form.append('name', data.name);
  form.append('email', data.email);
  form.append('address', data.address);
  form.append('number', data.phone);
  form.append('gender', data.gender);
  form.append('birth', data.birth);
  form.append('picture', photo);
  axios
    .put(`${API_URL}/private/profile`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      toastMessage(res?.data?.message, 'success');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      toastMessage(err?.response?.data?.message);
    });
};
