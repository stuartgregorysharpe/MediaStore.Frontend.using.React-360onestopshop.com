import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import './styles.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS } from './Modules/Auth/Actions/Action';

const BaseUrl = "http://localhost:443/api";

const InitApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;

    const refreshToken = async () => {
      try {
        const response = await axios.post(`${BaseUrl}/refreshToken`);
  
        if (response.data.status === "success") {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.data,
          });
          toast.info(response.data.message);
        }
  
        if (response.data.status === "failed") {
          toast.warn(response.data.message);
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    };

    refreshToken();
  }, [dispatch]);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <InitApp />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
