import {http} from '../../helpers/http';
import {API_URL} from '@env';
import toastMessage from '../../utils/showMessage';

export const addProducts = data => {
  toastMessage('Item added to cart', 'success');
  return {
    type: 'SET_CART_ADD_ITEM',
    payload: data,
  };
};
export const updateProducts = data => {
  return {
    type: 'SET_UPDATE_PRODUCTS',
    payload: data,
  };
};

export const createTransaction = (data, address, token, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    data.forEach(item => {
      form.append('product_id', item.id);
      form.append('product_amount', item.amount);
      form.append('product_variant', item.id_variant);
    });
    form.append('payment_method', address);

    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data: newData} = await http(token).post(
        `${API_URL}/private/transactions`,
        form.toString(),
      );
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(newData?.message, 'success');
      dispatch({type: 'SET_CLEAR_PRODUCTS'});
      navigation.navigate('MainApp');
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(error?.response?.data?.message);
    }
  };
};

export const deleteItem = payload => ({
  type: 'SET_DELETE_PRODUCTS',
  payload,
});
