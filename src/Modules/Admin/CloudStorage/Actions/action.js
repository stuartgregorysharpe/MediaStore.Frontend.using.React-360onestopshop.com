import axios from 'axios';
import { toast } from 'react-toastify';

const BaseUrl = "http://localhost:443/api"

export const ADD_MEGA_LIST_SUCCESS = "ADD_MEGA_LIST_SUCCESS";
export const ADD_MEGA_LIST_FAILURE = "ADD_MEGA_LIST_FAILURE";

export const addMegaList = (payload, navigate) => {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${BaseUrl}/add-mega-list`, payload);
            dispatch({
                type: ADD_MEGA_LIST_SUCCESS,
                payload: response.data
            });
            toast.success('Successfully Added')
        } catch (error) {
            error.response ? toast.warn(error.response.data.message) : toast.error('Failed');
            dispatch({
                type: ADD_MEGA_LIST_FAILURE,
            });
        }
    };
};

