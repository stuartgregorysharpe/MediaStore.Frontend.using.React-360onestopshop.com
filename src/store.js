import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

// Create store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
});

export default store;
