import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../Actions/Action';

const initialState = {
  user: null,
  error: null,
  success: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        success: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        success: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload.error,
        success: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload.error,
        success: false,
      };
    default:
      return state;
  }
};

export default Reducer;
