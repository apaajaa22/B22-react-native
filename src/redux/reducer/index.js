import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {registerReducer} from './auth';
import {photoReducer} from './profile';
import {historyReducer} from './history';
import carts from './cart';

const reducer = combineReducers({
  photoReducer,
  globalReducer,
  homeReducer,
  registerReducer,
  historyReducer,
  carts,
});

export default reducer;
