import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {registerReducer} from './auth';
import {photoReducer} from './profile';

const reducer = combineReducers({
  photoReducer,
  globalReducer,
  homeReducer,
  registerReducer,
});

export default reducer;
