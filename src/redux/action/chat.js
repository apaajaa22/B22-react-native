/* eslint-disable no-unused-vars */
import {API_URL} from '@env';
import {http} from '../../helpers/http';

export const getUserChat = token => {
  return async dispatch => {
    try {
      const {data} = await http(token).get(`${API_URL}/private/chats/list`);
      dispatch({type: 'GET_USER_CHAT', payload: data.results});
      console.log(token);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllUser = (token, search) => {
  return async dispatch => {
    const {data} = await http(token).get(
      `${API_URL}/private/chats/users?search=${search}`,
    );
    dispatch({type: 'GET_ALL_USER', payload: data.results});
  };
};

export const getChat = (token, num) => {
  return async dispatch => {
    const {data} = await http(token).get(
      `${API_URL}/private/chats/all?recipient=${num}`,
    );
    dispatch({type: 'GET_DETAIL_CHAT', payload: data.results});
  };
};

export const sendChat = (token, datauser) => {
  const form = new URLSearchParams();
  form.append('message', datauser.message);
  form.append('recipient', datauser.recipient);
  return async dispatch => {
    const {data} = await http(token).post(
      `${API_URL}/private/chats`,
      form.toString(),
    );
    dispatch(getChat(token, datauser.recipient));
    dispatch(getUserChat(token));
  };
};

export const deleteChat = (token, id, recipient) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('recipient', recipient);
    const {data} = await http(token).delete(`${API_URL}/private/chats/${id}`, {
      data: form,
    });
    dispatch(getChat(token, recipient));
    dispatch(getUserChat(token));
  };
};
