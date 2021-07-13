import {http} from '../../helpers/http';
import {API_URL} from '@env';
import toastMessage from '../../utils/showMessage';
export const addProducts = data => {
  return {
    type: 'SET_CART_ADD_ITEM',
    payload: data,
  };
};

export const createTransaction = (data, address, token, navigation) => {
  return async dispatch => {
    console.log(data, address, token);
    const form = new URLSearchParams();
    data.forEach(item => {
      console.log('new data', item.id_variant);
      form.append('product_id', item.id);
      form.append('product_amount', item.amount);
      form.append('product_variant', item.id_variant);
    });
    form.append('payment_method', address);
    console.log('new data', address);
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
      console.log(error);
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(error?.response?.data?.message);
    }
  };
};
