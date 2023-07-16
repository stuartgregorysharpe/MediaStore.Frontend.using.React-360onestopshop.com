import {
    ADD_MEGA_LIST_SUCCESS,
    ADD_MEGA_LIST_FAILURE,
  } from '../Actions/action';
  
  const initialState = {
    megaList: [],
    success: false,
    error: ""
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MEGA_LIST_SUCCESS:
        return {
          ...state,
          megaList: action.payload.data,
          success: true,
          error: ""
        };
      case ADD_MEGA_LIST_FAILURE:
        return {
          ...state,
          megaList: null,
          success: false,
          error: ''
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  