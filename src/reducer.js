import { combineReducers } from 'redux';
import AuthReducer from './Modules/Auth/Reducers/Reducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

export default rootReducer;
