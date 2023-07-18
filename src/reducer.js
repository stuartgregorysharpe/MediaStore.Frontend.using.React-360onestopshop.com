import { combineReducers } from 'redux';
import AuthReducer from './Modules/Auth/Reducers/Reducer';
import MegaReducer from './Modules/Admin/CloudStorage/Reducers/cloudStorageReducer'

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Mega: MegaReducer,
});

export default rootReducer;
