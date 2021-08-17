import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {registerReducer} from './auth';
import {photoReducer} from './profile';
import {historyReducer} from './history';
import carts from './cart';
import category from './category';
import searchReducer from './search';
import chat from './chat';

const reducer = combineReducers({
  photoReducer,
  globalReducer,
  homeReducer,
  registerReducer,
  historyReducer,
  carts,
  category,
  searchReducer,
  chat,
});

export default reducer;
