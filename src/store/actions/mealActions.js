import axios from 'axios';
import {GET_MEALS} from "./types";

export const getMeals = () => dispatch => {
    axios.get("/meal")
        .then(response => {
            dispatch({
                type: GET_MEALS,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
};