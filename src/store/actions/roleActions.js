import axios from 'axios';
import {GET_ROLES} from "./types";

export const getRoles = () => dispatch => {
    axios.get("/role")
        .then(response => dispatch({
            type: GET_ROLES,
            payload: response.data
        }))
        .catch(error => console.log(error))
};