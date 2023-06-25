import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = "REGOSTER_FAILURE"


export const Login = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('apiEndpoint/login', credentials);
            const { user, token } = response.data;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user,
                    token,
                },
            });
            localStorage.setItem('token', token);
            //   history.push('/home');
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : 'Login failed';
            dispatch({
                type: LOGIN_FAILURE,
                payload: {
                    error: errorMessage,
                },
            });
        }
    };
};

export const Register = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('apiEndpoint/register', credentials);
            const { user, token } = response.data;
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    user,
                    token,
                },
            });
            localStorage.setItem('token', token);
            //   history.push('/home');
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : 'Register failed';
            dispatch({
                type: REGISTER_FAILURE,
                payload: {
                    error: errorMessage,
                },
            });
        }
    };
};
