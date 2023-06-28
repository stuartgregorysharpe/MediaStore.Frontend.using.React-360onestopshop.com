import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import './styles.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS } from './Modules/Auth/Actions/Action';

const BaseUrl = "http://localhost:3003/api";

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
            payload: response.data,
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <InitApp />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
