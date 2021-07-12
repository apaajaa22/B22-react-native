import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {registerReducer} from './auth';
import {photoReducer} from './profile';
import {historyReducer} from './history';

const reducer = combineReducers({
  photoReducer,
  globalReducer,
  homeReducer,
  registerReducer,
  historyReducer,
});

export default reducer;
