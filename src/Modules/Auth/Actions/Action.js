import axios from 'axios';
import { toast } from 'react-toastify';

const BaseUrl = "http://localhost:3003/api"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = "REGOSTER_FAILURE"


export const Login = (payload, navigate) => {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${BaseUrl}/login`, payload);
            const { user, token } = response.data;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user,
                    token,
                },
            });
            console.log(response.headers.cookie, "XXXXXX");
            navigate('/');
            toast.success('Successfully joined')
            localStorage.setItem('token', token);
        } catch (error) {
            const errorMessage = error.response ? toast.warn(error.response.data.message) : toast.error('Login failed');
            dispatch({
                type: LOGIN_FAILURE,
                payload: {
                    error: errorMessage,
                },
            });
        }
    };
};

export const Register = (payload, navigate) => {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${BaseUrl}/register`, payload);
            const { user, token } = response.data;
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    user,
                    token,
                },
            });
            toast.info("Created your account");
            localStorage.setItem('token', token);
            navigate('/signin');
        } catch (error) {
            const errorMessage = error.response ? toast.warn(error.response.data.message) : toast.warn("Register failed.");
            dispatch({
                type: REGISTER_FAILURE,
                payload: {
                    error: errorMessage,
                },
            });
        }
    };
};
